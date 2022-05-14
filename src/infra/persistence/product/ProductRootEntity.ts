import { Attribute, Entity } from '@typedorm/common';
import { RootTypeDOrmEntity } from '../generic/typedorm/RootTypeDOrmEntity';

@Entity({
  name: 'Product',
  primaryKey: {
    partitionKey: 'Product#{id}',
  },
})
export class ProductRootEntity extends RootTypeDOrmEntity {
  @Attribute()
  name: string;

  @Attribute()
  description: string;
}
