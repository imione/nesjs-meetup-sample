import { Injectable } from '@nestjs/common';
import { SQSMessage } from 'sqs-consumer';
import { Message } from '../Message';

@Injectable()
export class MessageParser {
  parse(sqsMesage: SQSMessage): Message {
    /**
     * parse sqs message to message
     */
    return { subject: '', body: '' };
  }
}
