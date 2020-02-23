import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { User } from '../enities/user.entity';
import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor() {
    this.users = [
      {
        id: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        id: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        id: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = {
      id: new Date().valueOf(),
      username: createUserDTO.username,
      password: createUserDTO.password,
    };
    this.users.push(newUser);
    return newUser;
  }

  async findOne(username: string): Promise<User | undefined> {
    return _.find(this.users, { username });
  }
}
