import { Controller, Get, Inject } from '@nestjs/common';
import { UploadInport } from '../common/upload.port';
import { Response } from '../common/response.dto';
import { FindOneRequest } from '../restapi/dto/findone.request';

/**
 * graphql
 */
@Controller()
export class UploadControllerV1 {
  service: UploadInport;
  constructor(@Inject('service-v1') service: UploadInport) {
    this.service = service;
  }

  @Get()
  async searchOne(dto: FindOneRequest): Promise<Response> {
    return await this.service.findOne(dto);
  }
}
