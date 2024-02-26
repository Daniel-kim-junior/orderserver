import { Entity } from './entity.abstract';
import { Identity } from './identity.value';

export class AggregateRoot<AId extends Identity> extends Entity<AId> {
  constructor(
    readonly id: AId,
    private createdAt: Date,
    private updatedAt: Date,
    private deletedAt: Date | null,
  ) {
    super(id);
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
  getDeletedAt(): Date {
    return this.deletedAt;
  }
}
