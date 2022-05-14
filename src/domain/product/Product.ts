import { AggregateRoot } from '../generic/AggregateRoot';
import { ProductId } from './ProductId';

export class Product extends AggregateRoot<ProductId> {
  constructor(
    id: ProductId,
    private name: string,
    private description: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    super(id, createdAt, updatedAt, deletedAt);
  }

  static create(param: { id: ProductId; name: string; description: string }) {
    const { id, name, description } = param;

    return new Product(id, name, description, new Date(), new Date(), null);
  }

  updateName(name: string) {
    this.name = name;
  }

  updateDescription(description: string) {
    this.description = description;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }
}
