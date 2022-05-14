import { AggregateRoot } from './AggregateRoot';
import { Identity } from './Identity';

export interface IGenericRepository<
  TAgg extends AggregateRoot<TId>,
  TId extends Identity,
> {
  nextId: () => TId;
  findOne: (id: TId) => Promise<TAgg | null>;
  save: (aggregate: TAgg) => Promise<void>;
  remove: (aggregate: TAgg) => Promise<void>;
}
