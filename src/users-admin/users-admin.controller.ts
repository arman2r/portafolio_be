import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersAdminService } from './users-admin.service';
import { CreateUsersAdminDto } from './dto/create-users-admin.dto';
import { UpdateUsersAdminDto } from './dto/update-users-admin.dto';

@Controller('users-admin')
export class UsersAdminController {
  constructor(private readonly usersAdminService: UsersAdminService) {}

  @Post()
  create(@Body() createUsersAdminDto: CreateUsersAdminDto) {
    return this.usersAdminService.create(createUsersAdminDto);
  }

  @Get()
  findAll() {
    return this.usersAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersAdminDto: UpdateUsersAdminDto) {
    return this.usersAdminService.update(+id, updateUsersAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersAdminService.remove(+id);
  }
}
