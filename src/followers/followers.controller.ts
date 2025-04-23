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

@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post()
  async create(@Body() createFollowerDto: CreateFollowerDto) {
    const { email } = createFollowerDto;
    if (!email) {
      return new BadRequestException('Email is required');
    }
    const followerExists = await this.findOne(email);
    if (followerExists) {
      return new BadRequestException('Follower already exists');
    }
    return this.followersService.create(createFollowerDto);
  }

  @Get()
  findAll() {
    return this.followersService.findAll();
  }

  @Get(':email')
  async findOne(@Param('email') email: string) {
    const follower = await this.followersService.findOne(email);
    if (!follower) {
      return new BadRequestException('Follower not found');
    }
    return follower;
  }

  @Patch(':email')
  async update(
    @Param('email') email: string,
    @Body() updateFollowerDto: UpdateFollowerDto,
  ) {
    const follower = await this.findOne(email);
    if (!follower) {
      return new BadRequestException('Follower not found');
    }
    return this.followersService.update(email, updateFollowerDto);
  }

  @Delete(':email')
  async remove(@Param('email') email: string) {
    const follower = await this.findOne(email);
    if (follower instanceof BadRequestException) {
      throw follower;
    }
    return this.followersService.remove(follower.email);
  }
}
