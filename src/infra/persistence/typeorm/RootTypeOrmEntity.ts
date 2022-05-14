import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { RootDalEntity } from '../RootDalEntity';

@Entity()
export abstract class RootTypeOrmEntity extends RootDalEntity {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'int' })
  version: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
