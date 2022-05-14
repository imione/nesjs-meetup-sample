import { Attribute } from '@typedorm/common';
import { RootDalEntity } from '../RootDalEntity';

export abstract class RootTypeOrmEntity extends RootDalEntity {
  @Attribute()
  id: string;

  @Attribute()
  version: number;

  @Attribute()
  createdAt: Date;

  @Attribute()
  updatedAt: Date;

  @Attribute()
  deletedAt: Date;
}
