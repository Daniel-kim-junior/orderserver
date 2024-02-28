import { Module } from '@nestjs/common';
import { OrderControllerV2 } from './application/restapi/order.controller';
import { OrderRestService } from './application/restapi/order.service';
@Module({
  providers: [{ provide: 'service-v2', useClass: OrderRestService }],
  controllers: [OrderControllerV2],
})
export class OrderModule {}
