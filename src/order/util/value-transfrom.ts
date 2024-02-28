import { ColumnType } from 'typeorm';
import { Identity } from '../domain/value/identity';
import { OrderId } from '../domain/value/order-id';

interface Transformer<I extends Identity, V> {
  type: V;
  transformer: {
    to: (value: I) => V;
    from: (to: V) => I;
  };
}

export class OrderIdTransFormer implements Transformer<OrderId, ColumnType> {
  type: ColumnType = 'varchar';
  transformer = {
    to: (value: OrderId) => value.getId() as ColumnType,
    from: (col: ColumnType) => new OrderId(col.toString()),
  };
}
