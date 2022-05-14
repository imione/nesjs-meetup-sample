import { AggregateRoot } from '../generic/AggregateRoot';
import { UserId } from './UserId';

export class User extends AggregateRoot<UserId> {
  constructor(
    id: UserId,
    private name: string,
    private password: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    super(id, createdAt, updatedAt, deletedAt);
  }

  static create(param: { id: UserId; name: string; password: string }): User {
    const { id, name, password } = param;

    return new User(id, name, password, new Date(), new Date(), null);
  }

  updateName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  getPassword(): string {
    return this.password;
  }
}
