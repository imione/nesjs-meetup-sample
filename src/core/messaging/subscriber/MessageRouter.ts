import { Injectable } from '@nestjs/common';

import { Message } from '../Message';

@Injectable()
export class MessageRouter {
  async route(message: Message): Promise<unknown> {
    /**
     * message route to controller
     */
    return;
  }
}
