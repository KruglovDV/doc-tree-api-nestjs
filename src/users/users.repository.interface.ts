import { User } from '../enities/user.entity';

export interface IUsersRepository {

  save(user: User): Promise<User>

  findOne(username: string): Promise<User | undefined>
}