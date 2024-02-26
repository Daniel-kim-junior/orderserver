import { ValueObject } from './value.object';

export abstract class Identity extends ValueObject {
  constructor(private readonly AId: string) {
    super();
  }
}
