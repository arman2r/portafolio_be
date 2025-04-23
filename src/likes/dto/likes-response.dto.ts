import { Expose } from 'class-transformer';
import { SubscriberResponseDto } from './subscriber-response.dto';

export class LikeResponseDto {
  @Expose()
  id: number;

  @Expose()
  urlSection: string;

  @Expose()
  subscriber: SubscriberResponseDto; // Usa el DTO del subscriber

  @Expose()
  createdAt: Date;
}
