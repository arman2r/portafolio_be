/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    const { title, description, workedTime } = createSkillDto;
    if (!title || !description || !workedTime) {
      throw new BadRequestException('All fields (title, description, workedTime) are required');
    }
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const skill = await this.skillsService.findOne(+id);
    if (!skill) {
      throw new BadRequestException('Skill not found');
    }
    return skill;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    const skill = await this.skillsService.findOne(+id);
    if (!skill) {
      throw new BadRequestException('Skill not found');
    }
    return this.skillsService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.skillsService.remove(+id);
    } catch (error) {
      throw new NotFoundException(error, 'Skill not found');
    }
  }
}
