/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { plainToInstance } from 'class-transformer';
import { prismaService } from 'src/prisma/prisma.service';
import { LikeResponseDto } from './dto/likes-response.dto';

@Injectable()
export class LikesService {
  constructor(private prisma: prismaService) {}

  async create(createLikeDto: CreateLikeDto): Promise<LikeResponseDto> {
    const like = await this.prisma.likeSubscribers.create({
      data: {
        subscriberId: createLikeDto.subscriberId,
        urlSection: createLikeDto.urlSection,
      },
      include: {
        subscriber: true,
      },
    });
    return plainToInstance(LikeResponseDto, like);
  }

  async findAll(): Promise<LikeResponseDto[]> {
    const likes = await this.prisma.likeSubscribers.findMany({
      include: { subscriber: true },
      orderBy: { createdAt: 'desc' },
    });
    return plainToInstance(LikeResponseDto, likes);
  }

  async findByUrlSection(urlSection: string): Promise<LikeResponseDto[]> {
    const likes = await this.prisma.likeSubscribers.findMany({
      where: { urlSection },
      include: { subscriber: true },
    });
    return plainToInstance(LikeResponseDto, likes);
  }
}
