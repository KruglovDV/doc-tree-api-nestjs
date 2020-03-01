import { Inject, Injectable } from '@nestjs/common';
import { User } from '../enities/user.entity';
import { CreateUserDTO } from '../dto/user.dto';
import { IUsersRepository } from './users.repository.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('IUsersRepository')
    private readonly usersRepository: IUsersRepository,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser: User = {
      username: createUserDTO.username,
      password: createUserDTO.password,
    };
    const createdUser = await this.usersRepository.save(newUser);
    return createdUser;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne(username);
  }
}
