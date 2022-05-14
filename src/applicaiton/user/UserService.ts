import { Inject, Injectable } from '@nestjs/common';
import { Transactional } from 'src/core/database/typeorm/Transactional';
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

  @Transactional()
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
