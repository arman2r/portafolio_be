import { Module } from '@nestjs/common';
import { UsersAdminService } from './users-admin.service';
import { UsersAdminController } from './users-admin.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersAdminController],
  providers: [UsersAdminService],
  imports: [PrismaModule],
})
export class UsersAdminModule {}
