import { AggregateRoot } from '../domain/entity/aggregate-root';
import { Entity } from '../domain/entity/entity';
import { Identity } from '../domain/value/identity';

export interface EntityMapper<
  agg extends AggregateRoot<AId>,
  AId extends Identity,
  ent extends Entity<AId>,
> {
  toAggreate(entity: ent): agg;
}
