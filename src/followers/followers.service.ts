/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { prismaService } from 'src/prisma/prisma.service';
import { FollowerResponseDto } from './dto/follower-response.dto';

@Injectable()
export class FollowersService {
  constructor(private prisma: prismaService) {}
  create(createFollowerDto: CreateFollowerDto): Promise<CreateFollowerDto> {
    return this.prisma.subscribers
      .create({ data: createFollowerDto })
      .then((result) => ({
        ...result,
        email: result.email,
        names: result.names ?? '',
        lastNames: result.lastNames ?? '',
        phone: result.phone ?? '',
        isConfirmed: result.isConfirmed ?? false,
      }));
  }

  async findAll(): Promise<FollowerResponseDto[]> {
    const followers = await this.prisma.subscribers.findMany();
    return followers.map((follower) => ({
      ...follower,
      id: Number(follower.id),
      email: follower.email,
      names: follower.names ?? '',
      lastNames: follower.lastNames ?? '',
      phone: follower.phone ?? '',
      isConfirmed: !!follower.isConfirmed,
    }));
  }

  async findOne(email: string): Promise<FollowerResponseDto | null> {
    const follower = await this.prisma.subscribers.findUnique({
      where: { email },
    });
    if (!follower) return null;
    return {
      ...follower,
      id: Number(follower.id),
      email: follower.email,
      names: follower.names ?? '',
      lastNames: follower.lastNames ?? '',
      phone: follower.phone ?? '',
      isConfirmed: !!follower.isConfirmed,
    };
  }

  update(
    email: string,
    updateFollowerDto: UpdateFollowerDto,
  ): Promise<UpdateFollowerDto> {
    return this.prisma.subscribers
      .update({
        where: { email },
        data: updateFollowerDto,
      })
      .then((result) => ({
        ...result,
        email: result.email,
        names: result.names ?? undefined,
        lastNames: result.lastNames ?? undefined,
        phone: result.phone ?? undefined,
        isConfirmed: result.isConfirmed ?? undefined,
      }));
  }

  async remove(email: string): Promise<FollowerResponseDto> {
    const follower = await this.prisma.subscribers.delete({ where: { email } });

    return {
      ...follower,
      id: Number(follower.id),
      email: follower.email,
      names: follower.names ?? '',
      lastNames: follower.lastNames ?? '',
      phone: follower.phone ?? '',
      isConfirmed: !!follower.isConfirmed,
    };
  }
}
