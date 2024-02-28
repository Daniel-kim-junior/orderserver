import { Request } from './request.interface';
import { Response } from './response.interface';

export interface Inport<res extends Response> {
  createOrder(dto: Request): Promise<res>;
  updateOrder(dto: Request): Promise<res>;
  cancelOrder(dto: Request): Promise<res>;
}
