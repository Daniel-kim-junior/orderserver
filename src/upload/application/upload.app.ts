import { Inject } from '@nestjs/common';
import { Request } from './request.dto';
import { UploadInport } from './uploadmongo.port';

export class UploadControllerV1 {
  service: UploadInport;
  constructor(@Inject('service-v1') service: UploadInport) {
    this.service = service;
  }

  searchOne(dto: Request) {}
}
