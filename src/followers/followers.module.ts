import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CodeVerifyModule } from 'src/code-verify/code-verify.module';
import { CodeVerifyService } from 'src/code-verify/code-verify.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [FollowersController],
  providers: [FollowersService, CodeVerifyService],
  imports: [PrismaModule, CodeVerifyModule, AuthModule],
})
export class FollowersModule {}
