import { Identity } from '../value/identity';

export abstract class Entity<AId extends Identity> {
  constructor(readonly id: AId) {}
}
