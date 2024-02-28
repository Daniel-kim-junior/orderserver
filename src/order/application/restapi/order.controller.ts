import { Controller, Inject } from '@nestjs/common';
import { OrderInport } from '../common/order-inport.interface';

@Controller()
export class OrderControllerV2 {
  service: OrderInport;
  constructor(@Inject('service-v2') service: OrderInport) {
    this.service = service;
  }
}
