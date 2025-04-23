/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Expose } from 'class-transformer';

export class SkillResponseDto {
  id: number;
  title: string;
  description: string;
  workedTime: number;

  @Expose({ name: 'workedTimeYears' })
  get workedTimeYears(): number {
    return parseFloat((this.workedTime / 12).toFixed(1)); // 1 decimal
  }
}
