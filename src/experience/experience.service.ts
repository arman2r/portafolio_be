/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ExperienceResponseDto } from './dto/experience-response.dto';
import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExperienceService {
  constructor(private prisma: prismaService) {}

  create(
    createExperienceDto: CreateExperienceDto,
  ): Promise<CreateExperienceDto> {
    return this.prisma.experience.create({ data: createExperienceDto });
  }

  findAll(): Promise<ExperienceResponseDto[]> {
    return this.prisma.experience.findMany();
  }

  async findOne(id: number): Promise<ExperienceResponseDto | null> {
    const experience = await this.prisma.experience.findUnique({ where: { id } });
    if (!experience) return null;
    return experience;
  }

  update(id: number, updateExperienceDto: UpdateExperienceDto): Promise<UpdateExperienceDto> {
    return this.prisma.experience.update({ where: { id }, data: updateExperienceDto });
  }

  async remove(id: number): Promise<ExperienceResponseDto> {
    const deletedExperience = await this.prisma.experience.delete({ where: { id } });
    return deletedExperience;
  }
}
