import { ValueObject } from './value.object';

export abstract class Identity extends ValueObject {
  constructor(protected readonly AId: string) {
    super();
  }
}
