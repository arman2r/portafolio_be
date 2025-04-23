/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { prismaService } from 'src/prisma/prisma.service';
import { SkillResponseDto } from './dto/skill-reponse.dto';

@Injectable()
export class SkillsService {
  constructor(private prisma: prismaService) { }

  create(CreateSkillDto: CreateSkillDto): Promise<CreateSkillDto> {
    return this.prisma.skill.create({ data: CreateSkillDto });
  }

  async findAll(): Promise<SkillResponseDto[]> {
    const skills = await this.prisma.skill.findMany();

    return skills.map((skill) => ({
      id: skill.id,
      title: skill.title,
      description: skill.description,
      workedTime: skill.workedTime,
      workedTimeYears: parseFloat((skill.workedTime / 12).toFixed(1)),
    }));
  }

  async findOne(id: number): Promise<SkillResponseDto | null> {
    const skill = await this.prisma.skill.findUnique({ where: { id } });
    if (!skill) return null;

    return {
      id: skill.id,
      title: skill.title,
      description: skill.description,
      workedTime: skill.workedTime,
      workedTimeYears: parseFloat((skill.workedTime / 12).toFixed(1)),
    };
  }

  update(id: number, updateSkillDto: UpdateSkillDto): Promise<UpdateSkillDto> {
    return this.prisma.skill.update({ where: { id }, data: updateSkillDto });
  }

  async remove(id: number): Promise<SkillResponseDto> {
    const deletedSkill = await this.prisma.skill.delete({ where: { id } });

    return {
      id: deletedSkill.id,
      title: deletedSkill.title,
      description: deletedSkill.description,
      workedTime: deletedSkill.workedTime,
      workedTimeYears: parseFloat((deletedSkill.workedTime / 12).toFixed(1)),
    };
  }
}
