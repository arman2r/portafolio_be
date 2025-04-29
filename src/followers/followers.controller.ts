/* eslint-disable @typescript-eslint/await-thenable */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { FollowersService } from './followers.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { FollowerResponseDto } from './dto/follower-response.dto';
import { CodeVerifyService } from 'src/code-verify/code-verify.service';
import { CreateCodeVerifyDto } from 'src/code-verify/dto/create-code-verify.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('followers')
export class FollowersController {
  constructor(
    private readonly followersService: FollowersService,
    private readonly codeVerify: CodeVerifyService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() createFollowerDto: CreateFollowerDto) {
    const { email } = createFollowerDto;
    const createCodeVerifyDto = { email } as CreateCodeVerifyDto;
    if (!email) {
      return new BadRequestException('Email is required');
    }
    const followerExists = await this.findOne(email);
    if (followerExists) {
      if (!followerExists.follower?.isConfirmed) {
        return this.codeVerify.create(createCodeVerifyDto);
      } else {
        return this.followersService.create(createFollowerDto);
      }
      //return new BadRequestException('Follower already exists');
    } else {
      //await this.followersService.create(createFollowerDto);
      return this.codeVerify.create(createCodeVerifyDto);
    }
  }

  @Get()
  findAll() {
    return this.followersService.findAll();
  }

  @Get(':email')
  async findOne(
    @Param('email') email: string,
  ): Promise<{ exists: boolean; follower?: FollowerResponseDto }> {
    const follower = await this.followersService.findOne(email);
    if (!follower) {
      return { exists: false };
    }
    return { exists: true, follower };
  }

  @Patch(':email')
  async update(
    @Param('email') email: string,
    @Body() updateFollowerDto: UpdateFollowerDto,
  ) {
    const follower = await this.findOne(email);
    if (!follower.exists) {
      return new BadRequestException('Follower not found');
    }
    return this.followersService.update(email, updateFollowerDto);
  }

  @Post('follower-login')
  async followerLogin(@Body() { email }: { email: string }) {
    const follower = await this.findOne(email);
    if (!follower.exists) {
      return new BadRequestException('Follower not found');
    }

    const tokenData = await this.authService.generateSubscriberToken(email);

    return {
      success: true,
      message: 'Autenticación exitosa',
      ...tokenData,
    };
  }

  @Delete(':email')
  async remove(@Param('email') email: string) {
    const subscriber = await this.findOne(email);
    if (subscriber instanceof BadRequestException) {
      throw subscriber;
    }
    if (!subscriber.follower) {
      throw new BadRequestException('Follower not found');
    }
    return this.followersService.remove(String(subscriber.follower.id));
  }
}
