import { Module } from '@nestjs/common';
import { SkillsModule } from './skills/skills.module';
import { ExperienceModule } from './experience/experience.module';
import { FollowersModule } from './followers/followers.module';
import { UsersAdminModule } from './users-admin/users-admin.module';
import { ConfigModule } from '@nestjs/config';
import { LikesModule } from './likes/likes.module';
import { CodeVerifyModule } from './code-verify/code-verify.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SkillsModule,
    ExperienceModule,
    FollowersModule,
    UsersAdminModule,
    LikesModule,
    MailerModule,
    CodeVerifyModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
