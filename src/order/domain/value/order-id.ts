import { Identity } from './identity';

export class OrderId extends Identity {
  constructor(id: string) {
    super(id);
  }
  getId(): string {
    return super.AId;
  }
}
