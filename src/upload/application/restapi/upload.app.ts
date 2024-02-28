import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UploadInport } from '../common/upload.port';
import { FindOneRequest, UpdateIdRequest } from './dto/findone.request';

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
  @Get()
  async g(dto: UpdateIdRequest) {
    console.log(dto);
  }
}
