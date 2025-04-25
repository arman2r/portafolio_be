import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Module({
  controllers: [LikesController],
  providers: [LikesService, JwtAuthGuard],
  imports: [PrismaModule],
})
export class LikesModule {}
