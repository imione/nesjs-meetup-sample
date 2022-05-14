import { Module } from '@nestjs/common';
import { TransactionManager } from '@typedorm/core';
import { TypeOrmDatabase } from './database/typeorm/TypeormDatabase';
import { MessagingModule } from './messaging/MessagingModule';

const TypeOrmProviders = [TransactionManager, TypeOrmDatabase];

@Module({
  imports: [MessagingModule],
  providers: [...TypeOrmProviders],
  exports: [TransactionManager, MessagingModule],
})
export class CoreModule {}
