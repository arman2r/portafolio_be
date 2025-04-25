import { PartialType } from '@nestjs/mapped-types';
import { CreateCodeVerifyDto } from './create-code-verify.dto';

export class UpdateCodeVerifyDto extends PartialType(CreateCodeVerifyDto) {}
