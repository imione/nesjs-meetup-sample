import { SNS } from 'aws-sdk';
import { IPublisher } from '../IPublisher';

import { Message } from '../../Message';

export class SimplePublisher implements IPublisher {
  async publish(message: Message) {
    const snsClient = new SNS();

    const snsMessage: SNS.Types.PublishInput = {
      Message: JSON.stringify(message),
    };
    await snsClient.publish(snsMessage).promise();
  }
}
