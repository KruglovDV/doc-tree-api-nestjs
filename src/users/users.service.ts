import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return _.find(this.users, { username });
  }
}