import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateCodeVerifyDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 6)
  code: string;

  @IsOptional()
  @IsEmail()
  subscriberEmail?: string;

  @IsOptional()
  @IsEmail()
  userAdminEmail?: string;
}
