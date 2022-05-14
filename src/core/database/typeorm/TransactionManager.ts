import { Injectable } from '@nestjs/common';
import { getNamespace } from 'cls-hooked';
import { EntityManager } from 'typeorm';

import NamespaceKey from './NamespaceKey';
import { MysqlDataSource } from './TypeormDatabase';

@Injectable()
export class TransactionManager {
  getEntityManager(): EntityManager {
    const namespace = getNamespace(NamespaceKey.TRANSACTION);

    if (!namespace.active) {
      throw new Error('Namespace is not active');
    }

    return (
      namespace.get(NamespaceKey.ENTITY_MANAGER) ||
      MysqlDataSource.createEntityManager()
    );
  }
}
