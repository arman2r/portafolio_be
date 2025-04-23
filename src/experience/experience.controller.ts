/* eslint-disable prettier/prettier */
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
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) { }

  @Post()
  create(@Body() createExperienceDto: CreateExperienceDto) {
    const { company, position, description, yearStart, yearEnd } = createExperienceDto;
    if (!company || !position || !description || !yearStart || !yearEnd) {
      throw new BadRequestException('All fields are required');
    }
    return this.experienceService.create(createExperienceDto);
  }

  @Get()
  findAll() {
    return this.experienceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const experience = await this.experienceService.findOne(+id);
    if (!experience) {
      throw new BadRequestException('experience not found');
    }
    return experience;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ) {
    const experience = await this.experienceService.findOne(+id);
    if (!experience) {
      throw new BadRequestException('experience not found');
    }
    return this.experienceService.update(+id, updateExperienceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const experience = await this.experienceService.findOne(+id);
    if (!experience) {
      throw new BadRequestException('experience not found');
    }
    return this.experienceService.remove(+id);
  }
}
