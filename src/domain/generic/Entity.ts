import { Identity } from './Identity';

export class Entity<TId extends Identity> {
  constructor(readonly id: TId) {}
}
