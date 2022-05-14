import { Message } from '../Message';

export interface IPublisher {
  publish: (message: Message) => Promise<void>;
}
