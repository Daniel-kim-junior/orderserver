import { Injectable } from '@nestjs/common';
import { UploadInport } from './uploadmongo.port';
import { UploadRequest } from './upload.request';
import { UploadResponse } from './upload.response';

@Injectable()
export class UploadService implements UploadInport {
  fileChange(dto: UploadRequest): UploadResponse {
    throw new Error('Method not implemented.');
  }
  findOne(dto: UploadRequest): Promise<UploadResponse> {
    throw new Error('Method not implemented.');
  }
  create(dto: UploadRequest): Promise<UploadResponse> {
    throw new Error('Method not implemented.');
  }
  update(dto: UploadRequest): Promise<UploadResponse> {
    throw new Error('Method not implemented.');
  }
}
