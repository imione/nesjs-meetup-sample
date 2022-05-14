import { AggregateRoot } from 'src/domain/generic/AggregateRoot';
import { Identity } from 'src/domain/generic/Identity';
import { RootDalEntity } from './RootDalEntity';

export abstract class EntityMapper<
  TAgg extends AggregateRoot<TId>,
  TId extends Identity,
  TDalEntity extends RootDalEntity,
> {
  toAggregate: (dalEntity: TDalEntity) => TAgg;
  toDalEntity: (aggregate: TAgg) => TDalEntity;
}
