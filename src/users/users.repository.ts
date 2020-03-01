import { User } from '../enities/user.entity';
import { IUsersRepository } from './users.repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository implements IUsersRepository{
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } })
  }
}