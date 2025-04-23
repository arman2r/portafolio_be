import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateLikeDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  subscriberId: string;
  @IsString()
  @IsNotEmpty()
  urlSection: string;
}
