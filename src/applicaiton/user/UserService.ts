import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/User';
import {
  IUserRepository,
  UserRepositoryKey,
} from 'src/domain/user/UserRepository';
import { CreateUserCommand } from './createUser/CreateUserCommand';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryKey) private readonly userRepository: IUserRepository,
  ) {}

  async createUser(command: CreateUserCommand) {
    const { name, password } = command;

    const user = User.create({
      id: this.userRepository.nextId(),
      name,
      password,
    });

    await this.userRepository.save(user);
  }
}
