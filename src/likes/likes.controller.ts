import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { prismaService } from 'src/prisma/prisma.service';

@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService,
    private readonly prisma: prismaService, // Inyectamos Prisma aquí
  ) {}

  @Post()
  async create(@Body() createLikeDto: CreateLikeDto) {
    // Validación en el controlador
    const subscriberExists = await this.prisma.subscribers.findUnique({
      where: { id: createLikeDto.subscriberId },
    });

    if (!subscriberExists) {
      throw new NotFoundException('Subscriber no encontrado');
    }

    // 2. Validar que no exista un like previo con la misma urlSection
    const existingLike = await this.prisma.likeSubscribers.findFirst({
      where: {
        subscriberId: createLikeDto.subscriberId,
        urlSection: createLikeDto.urlSection,
      },
    });

    if (existingLike) {
      throw new ConflictException(
        'Ya has dado like a esta sección anteriormente',
      );
    }

    return this.likesService.create(createLikeDto);
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Get('section/:urlSection')
  findByUrlSection(@Param('urlSection') urlSection: string) {
    return this.likesService.findByUrlSection(urlSection);
  }
}
