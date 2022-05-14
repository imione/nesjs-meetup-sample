import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Consumer, SQSMessage } from 'sqs-consumer';
import { MessageParser } from './MessageParser';
import { MessageRouter } from './MessageRouter';

@Injectable()
export class Subscriber implements OnModuleInit {
  private consumer: Consumer | null;

  constructor(
    @Inject(MessageParser) private readonly messageParser: MessageParser,
    @Inject(MessageRouter) private readonly messageRouter: MessageRouter,
  ) {
    this.consumer = null;
  }

  onModuleInit() {
    this.consumer = Consumer.create({
      queueUrl: 'queueUrl',
      handleMessage: async (message: SQSMessage) => {
        await this.messageRouter.route(this.messageParser.parse(message));
      },
    });

    this.consumer.on('error', (error) => {
      console.log(error);
    });

    this.consumer.start();
  }
}
