import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'src/domain/product/Product';
import {
  IProductRepository,
  ProductRepositoryKey,
} from 'src/domain/product/IProductRepository';
import { CreateProductCommand } from './createProduct/CreateProductCommand';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ProductRepositoryKey)
    private readonly productRepository: IProductRepository,
  ) {}

  async createProduct(command: CreateProductCommand) {
    const { name, description } = command;

    const product = Product.create({
      id: this.productRepository.nextId(),
      name,
      description,
    });

    await this.productRepository.save(product);
  }
}
