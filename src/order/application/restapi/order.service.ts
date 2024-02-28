import { Injectable } from '@nestjs/common';
import { OrderInport } from '../common/order-inport.interface';
import { Request } from '../common/request.interface';
import { Response } from '../common/response.interface';

@Injectable()
export class OrderRestService implements OrderInport {
  createOrder(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  updateOrder(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  cancelOrder(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
