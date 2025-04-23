// subscriber-response.dto.ts
import { Expose } from 'class-transformer';

export class SubscriberResponseDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  names: string;

  // Excluye campos sensibles como passwords
}
