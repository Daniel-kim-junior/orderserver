import { Controller, Inject } from '@nestjs/common';
import { UploadInport } from '../common/upload.port';

@Controller('v2')
export class UploadControllerV2 {
  service: UploadInport;
  constructor(@Inject('service-v2') service: UploadInport) {
    this.service = service;
  }
}
