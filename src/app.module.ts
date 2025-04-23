import { Module } from '@nestjs/common';
import { SkillsModule } from './skills/skills.module';
import { ExperienceModule } from './experience/experience.module';
import { FollowersModule } from './followers/followers.module';
import { UsersAdminModule } from './users-admin/users-admin.module';
import { ConfigModule } from '@nestjs/config';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SkillsModule,
    ExperienceModule,
    FollowersModule,
    UsersAdminModule,
    LikesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
