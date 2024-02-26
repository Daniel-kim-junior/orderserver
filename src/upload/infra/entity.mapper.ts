import { AggregateRoot } from '../domain/aggregate.root';
import { Entity } from '../domain/entity.abstract';
import { Identity } from '../domain/identity.value';

export interface EntityMapper<
  agg extends AggregateRoot<AId>,
  AId extends Identity,
  ent extends Entity<AId>,
> {
  toAggreate(entity: ent): agg;
}
