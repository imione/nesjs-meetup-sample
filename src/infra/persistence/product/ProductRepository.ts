import { v1 as uuidv1 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';

import { Product } from 'src/domain/Product/Product';
import { ProductId } from 'src/domain/Product/ProductId';
import { ProductRootEntity } from './ProductRootEntity';
import { ProductEntityMapper } from './ProductEntityMapper';
import { GenericTypeDOrmRepo } from '../generic/typedorm/GenericTypeDOrmRepo';

@Injectable()
export class ProductRepository extends GenericTypeDOrmRepo<
  Product,
  ProductId,
  ProductRootEntity
> {
  constructor(@Inject(ProductEntityMapper) mapper: ProductEntityMapper) {
    super(mapper);
  }

  nextId(): ProductId {
    return new ProductId(uuidv1());
  }
}
