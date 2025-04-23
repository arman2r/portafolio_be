import { Injectable } from '@nestjs/common';
import { CreateUsersAdminDto } from './dto/create-users-admin.dto';
import { UpdateUsersAdminDto } from './dto/update-users-admin.dto';

@Injectable()
export class UsersAdminService {
  create(createUsersAdminDto: CreateUsersAdminDto) {
    return 'This action adds a new usersAdmin';
  }

  findAll() {
    return `This action returns all usersAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersAdmin`;
  }

  update(id: number, updateUsersAdminDto: UpdateUsersAdminDto) {
    return `This action updates a #${id} usersAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersAdmin`;
  }
}
