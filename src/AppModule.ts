import { Module } from '@nestjs/common';
import { ProductService } from './applicaiton/product/ProductService';
import { UserService } from './applicaiton/user/UserService';
import { CoreModule } from './core/CoreModule';
import { ProductEntityMapper } from './infra/persistence/product/ProductEntityMapper';
import { ProductRepository } from './infra/persistence/product/ProductRepository';
import { UserEntityMapper } from './infra/persistence/user/UserEntityMapper';
import { UserRepository } from './infra/persistence/user/UserRepository';

const ProductProviders = [
  ProductService,
  ProductEntityMapper,
  ProductRepository,
];
const UserProviders = [UserService, UserEntityMapper, UserRepository];

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [...ProductProviders, ...UserProviders],
})
export class AppModule {}
