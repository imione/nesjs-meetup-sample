import { IGenericRepository } from '../generic/IGenericRepository';
import { Product } from './Product';
import { ProductId } from './ProductId';

export const ProductRepositoryKey = 'ProductRepository';

export interface IProductRepository
  extends IGenericRepository<Product, ProductId> {}
