import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { getNamespace } from 'cls-hooked';
import NamespaceKey from './NamespaceKey';

@Injectable()
export class TypeormTransactionMiddleware implements NestMiddleware {
  use(_req: Request, _res: Response, next: NextFunction): void {
    const namespace = getNamespace(NamespaceKey.TRANSACTION);

    return namespace.run(async () => Promise.resolve().then(next));
  }
}
