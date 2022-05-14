import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const MysqlDataSource = new DataSource({
  type: 'mysql',
});

@Injectable()
export class TypeOrmDatabase implements OnModuleInit {
  async onModuleInit() {
    await MysqlDataSource.initialize();
  }
}
