import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/user/User';
import { UserId } from 'src/domain/user/UserId';
import { EntityMapper } from '../generic/EntityMapper';
import { UserRootEntity } from './UserRootEntity';

@Injectable()
export class UserEntityMapper extends EntityMapper<
  User,
  UserId,
  UserRootEntity
> {
  toAggregate(dalEntity: UserRootEntity): User {
    const { id, name, password, createdAt, updatedAt, deletedAt } = dalEntity;

    return new User(
      new UserId(id),
      name,
      password,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }

  toDalEntity(aggregate: User): UserRootEntity {
    const rootDalEntity = new UserRootEntity();
    rootDalEntity.id = aggregate.id.key;
    rootDalEntity.name = aggregate.getName();
    rootDalEntity.password = aggregate.getPassword();
    rootDalEntity.createdAt = aggregate.getCreatedAt();
    rootDalEntity.updatedAt = aggregate.getUpdatedAt();
    rootDalEntity.deletedAt = aggregate.getDeletedAt();

    return rootDalEntity;
  }
}
