import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('CatsController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe('createUser', () => {
    it('should create user', async () => {
      const requestPayload = { username: 'testUser', password: 'password' };
      const response = await usersController.createUser(requestPayload);
      expect(response).toHaveProperty('id');
    });
  });
});