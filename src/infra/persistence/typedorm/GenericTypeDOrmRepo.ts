import { Type } from '@nestjs/common';
import { getEntityManager } from '@typedorm/core';
import {} from '@typedorm/common';

import { AggregateRoot } from 'src/domain/generic/AggregateRoot';
import { Identity } from 'src/domain/generic/Identity';
import { IGenericRepository } from 'src/domain/generic/IGenericRepository';
import { RootTypeOrmEntity } from './RootTypeDOrmEntity';
import { EntityMapper } from '../EntityMapper';

export abstract class GenericTypeDOrmRepo<
  TAgg extends AggregateRoot<TId>,
  TId extends Identity,
  TDalEntity extends RootTypeOrmEntity,
> implements IGenericRepository<TAgg, TId>
{
  private readonly mapper: EntityMapper<TAgg, TId, TDalEntity>;

  abstract nextId: () => TId;

  async findOne(id: TId): Promise<TAgg | null> {
    const { key } = id;

    const entity = await getEntityManager().findOne(this.getEntityType(), key);

    if (!entity) {
      return null;
    }

    return this.mapper.toAggregate(entity);
  }

  async save(aggregate: TAgg): Promise<void> {
    const entityManager = getEntityManager();
    const dalEntity = this.mapper.toDalEntity(aggregate);
    const { id } = dalEntity;
    const exist = await entityManager.exists(this.getEntityType(), id);

    if (exist) {
      await entityManager.update(this.getEntityType(), { id }, dalEntity);
    } else {
      await entityManager.create(dalEntity);
    }
  }

  async remove(aggregate: TAgg): Promise<void> {
    const entityManager = getEntityManager();
    const dalEntity = this.mapper.toDalEntity(aggregate);
    const { id } = dalEntity;

    await entityManager.delete(this.getEntityType(), { id });
  }

  private getEntityType(): Type<TDalEntity> {
    return Reflect.getMetadata(this.constructor.name, this.constructor);
  }
}
