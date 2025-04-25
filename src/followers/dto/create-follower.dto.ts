/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFollowerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  names: string;
  @IsString()
  @IsNotEmpty()
  lastNames: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsBoolean()
  @IsOptional()
  isConfirmed: boolean;
}
