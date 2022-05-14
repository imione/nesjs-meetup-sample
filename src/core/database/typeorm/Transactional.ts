import { getNamespace } from 'cls-hooked';
import { EntityManager } from 'typeorm';

import NamespaceKey from './NamespaceKey';
import { MysqlDataSource } from './TypeormDatabase';

export function Transactional() {
  return function (
    target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    async function transactionWrapped(...args: unknown[]) {
      const namespace = getNamespace(NamespaceKey.TRANSACTION);
      let result: unknown = null;

      if (!namespace.active) {
        throw new Error('Namespace is not active');
      }

      let entityManager = namespace.get(NamespaceKey.ENTITY_MANAGER);

      if (!entityManager) {
        entityManager = MysqlDataSource.createEntityManager();
        entityManager.transaction(
          async (transactionalEntityManager: EntityManager) => {
            namespace.set(
              NamespaceKey.ENTITY_MANAGER,
              transactionalEntityManager,
            );
            result = await originalMethod.bind(target)(...args);
          },
        );
      } else {
        result = await originalMethod.bind(target)(...args);
      }

      return result;
    }

    descriptor.value = transactionWrapped;
  };
}
