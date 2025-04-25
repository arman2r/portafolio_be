import { IsEmail, IsOptional } from 'class-validator';

export class CodeVerifyFilterDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEmail()
  subscriberEmail?: string;

  @IsOptional()
  @IsEmail()
  userAdminEmail?: string;
}
