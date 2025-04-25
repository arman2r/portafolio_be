import { IsEmail, IsString, Length } from 'class-validator';

export class codeVerifyValidDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 6)
  code: string;

  @IsString()
  userType: 'subscriber' | 'admin'; // Para saber a qué tabla pertenece el email
}
