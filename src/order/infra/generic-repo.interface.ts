import { AggregateRoot } from '../domain/entity/aggregate-root';
import { Identity } from '../domain/value/identity';

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
