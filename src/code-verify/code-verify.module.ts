import { Module } from '@nestjs/common';
import { CodeVerifyService } from './code-verify.service';
import { CodeVerifyController } from './code-verify.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailerModule } from 'src/mailer/mailer.module';
import { prismaService } from 'src/prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { FollowersService } from 'src/followers/followers.service';

@Module({
  controllers: [CodeVerifyController],
  providers: [CodeVerifyService, prismaService, FollowersService],
  imports: [PrismaModule, MailerModule, AuthModule],
  exports: [CodeVerifyService],
})
export class CodeVerifyModule {}
