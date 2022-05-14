import { Module } from '@nestjs/common';
import { TransactionManager } from '@typedorm/core';
import { TypeOrmDatabase } from './database/typeorm/TypeormDatabase';

const TypeOrmProviders = [TransactionManager, TypeOrmDatabase];

@Module({
  imports: [],
  providers: [...TypeOrmProviders],
  exports: [TransactionManager],
})
export class CoreModule {}
