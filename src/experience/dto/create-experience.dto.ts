/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  @IsNotEmpty()
  company: string;
  @IsString()
  @IsNotEmpty()
  position: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  yearStart: string;
  @IsString()
  @IsNotEmpty()
  yearEnd: string;
}
