import { Column } from 'typeorm';
import { RootTypeOrmEntity } from '../generic/typeorm/RootTypeOrmEntity';

export class UserRootEntity extends RootTypeOrmEntity {
  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512 })
  password: string;
}
