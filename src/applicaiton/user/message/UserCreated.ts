import { Message } from 'src/core/messaging/Message';
import { User } from '../../../domain/user/User';

export class UserCreated extends Message {
  constructor(user: User) {
    super(UserCreated.constructor.name, user);
  }
}
