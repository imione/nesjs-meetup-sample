import { Inject, Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid';

import { TransactionManager } from 'src/core/database/typeorm/TransactionManager';
import { Message } from '../../Message';
import { IPublisher } from '../IPublisher';
import { MessageEntity } from './MessageEntity';

@Injectable()
export class OutboxPublisher implements IPublisher {
  constructor(
    @Inject(TransactionManager) private readonly trxManager: TransactionManager,
  ) {}

  async publish(message: Message): Promise<void> {
    const messageRepo = this.trxManager
      .getEntityManager()
      .getRepository(MessageEntity);

    const messageEntity = new MessageEntity();
    messageEntity.id = uuidv1();
    messageEntity.subject = message.subject;
    messageEntity.body = JSON.stringify(message.body);

    await messageRepo.save(messageEntity);
  }
}
