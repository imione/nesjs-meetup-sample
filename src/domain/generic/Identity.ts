import { ValueObject } from './ValueObject';

export class Identity extends ValueObject {
  constructor(readonly key: string) {
    super();
  }
}
