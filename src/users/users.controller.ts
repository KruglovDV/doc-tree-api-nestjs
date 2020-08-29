import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../enities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDTO } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.usersService.createUser(createUserDTO);
  }
}