import { Inject, Injectable } from '@nestjs/common';
import { Transactional } from 'src/core/database/typeorm/Transactional';
import { IPublisher } from 'src/core/messaging/publisher/IPublisher';
import { SimplePublisher } from 'src/core/messaging/publisher/simple/SimplePublisher';
import { User } from 'src/domain/user/User';
import {
  IUserRepository,
  UserRepositoryKey,
} from 'src/domain/user/UserRepository';
import { CreateUserCommand } from './createUser/CreateUserCommand';
import { UserCreated } from './message/UserCreated';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryKey) private readonly userRepository: IUserRepository,
    @Inject(SimplePublisher) private readonly messagePublisher: IPublisher,
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
    await this.messagePublisher.publish(new UserCreated(user));
  }
}
