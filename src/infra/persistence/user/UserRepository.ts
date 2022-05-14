import { v1 as uuidv1 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';

import { User } from 'src/domain/user/User';
import { UserId } from 'src/domain/user/UserId';
import { GenericTypeOrmRepo } from '../generic/typeorm/GenericTypeOrmRepo';
import { UserRootEntity } from './UserRootEntity';
import { UserEntityMapper } from './UserEntityMapper';

@Injectable()
export class UserRepository extends GenericTypeOrmRepo<
  User,
  UserId,
  UserRootEntity
> {
  constructor(@Inject(UserEntityMapper) mapper: UserEntityMapper) {
    super(mapper);
  }

  nextId(): UserId {
    return new UserId(uuidv1());
  }
}
