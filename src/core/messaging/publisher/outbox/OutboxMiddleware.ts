import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { getNamespace } from 'cls-hooked';
import NamespaceKey from './NamespaceKey';

@Injectable()
export class OutboxMiddleware implements NestMiddleware {
  use(_req: Request, _res: Response, next: NextFunction): void {
    const namespace = getNamespace(NamespaceKey.OUTBOX);

    return namespace.run(async () => Promise.resolve().then(next));
  }
}
