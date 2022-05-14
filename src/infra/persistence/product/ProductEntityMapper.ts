import { Injectable } from '@nestjs/common';

import { Product } from 'src/domain/product/Product';
import { ProductId } from 'src/domain/product/ProductId';
import { EntityMapper } from '../generic/EntityMapper';
import { ProductRootEntity } from './ProductRootEntity';

@Injectable()
export class ProductEntityMapper extends EntityMapper<
  Product,
  ProductId,
  ProductRootEntity
> {
  toAggregate(dalEntity: ProductRootEntity): Product {
    const { id, name, description, createdAt, updatedAt, deletedAt } =
      dalEntity;

    return new Product(
      new ProductId(id),
      name,
      description,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }

  toDalEntity(aggregate: Product): ProductRootEntity {
    const rootDalEntity = new ProductRootEntity();
    rootDalEntity.id = aggregate.id.key;
    rootDalEntity.name = aggregate.getName();
    rootDalEntity.description = aggregate.getDescription();
    rootDalEntity.createdAt = aggregate.getCreatedAt();
    rootDalEntity.updatedAt = aggregate.getUpdatedAt();
    rootDalEntity.deletedAt = aggregate.getDeletedAt();

    return rootDalEntity;
  }
}
