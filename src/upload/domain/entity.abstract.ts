import { Identity } from './identity.value';

export abstract class Entity<AId extends Identity> {
  constructor(readonly id: AId) {}
}
