import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CodeVerifyModule } from 'src/code-verify/code-verify.module';
import { CodeVerifyService } from 'src/code-verify/code-verify.service';

@Module({
  controllers: [FollowersController],
  providers: [FollowersService, CodeVerifyService],
  imports: [PrismaModule, CodeVerifyModule],
})
export class FollowersModule {}
