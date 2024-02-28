import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderId } from '../value/order-id';
import { OrderIdTransFormer } from 'src/order/util/value-transfrom';

@Entity()
export abstract class RootTypeOrmEntity {
  @PrimaryColumn(new OrderIdTransFormer())
  id: OrderId;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
