export abstract class Message {
  constructor(readonly subject: string, readonly body: unknown) {}
}
