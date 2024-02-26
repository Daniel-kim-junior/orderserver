import { AggregateRoot } from '../domain/aggregate.root';
import { Identity } from '../domain/identity.value';

/**
 * out Adapter interface
 */
export interface IGenericRepository<
  agg extends AggregateRoot<AId>,
  AId extends Identity,
> {
  save(agg: agg): Promise<void>;
  findOne(aid: AId): Promise<agg | null>;
}
