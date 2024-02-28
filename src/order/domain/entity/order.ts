import { AggregateRoot } from './aggregate-root';
import { OrderId } from '../value/order-id';

export class Order extends AggregateRoot<OrderId> {}
