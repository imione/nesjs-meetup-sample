import { Entity } from './Entity';
import { Identity } from './Identity';

export class AggregateRoot<TId extends Identity> extends Entity<TId> {
  constructor(
    readonly id: TId,
    private createdAt: Date,
    private updatedAt: Date,
    private deletedAt: Date | null,
  ) {
    super(id);
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
  }
  getDeletedAt(): Date | null {
    return this.deletedAt;
  }
}
