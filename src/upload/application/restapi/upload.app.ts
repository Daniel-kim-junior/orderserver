import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UploadInport } from '../common/upload.port';
import { FindOneRequest } from './dto/findone.request';

@Controller()
export class UploadControllerV2 {
  service: UploadInport;
  constructor(@Inject('service-v2') service: UploadInport) {
    this.service = service;
  }
  @Post()
  async createUser(
    @Body()
    dto: FindOneRequest,
  ) {
    console.log(dto);
  }
}
