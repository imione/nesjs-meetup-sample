import { Module } from '@nestjs/common';
import { Subscriber } from 'rxjs';
import { OutboxPublisher } from './publisher/outbox/OutboxPublisher';
import { SimplePublisher } from './publisher/simple/SimplePublisher';
import { MessageParser } from './subscriber/MessageParser';
import { MessageRouter } from './subscriber/MessageRouter';

const SubscriberProviders = [MessageParser, MessageRouter, Subscriber];
const PublisherProviders = [SimplePublisher, OutboxPublisher];

@Module({
  imports: [...SubscriberProviders, ...PublisherProviders],
  exports: [Subscriber, SimplePublisher, OutboxPublisher],
})
export class MessagingModule {}
