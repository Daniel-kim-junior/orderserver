import { UploadRequest } from './upload.request';
import { UploadResponse } from './upload.response';
import { AppInport } from './usecase.port';

export interface UploadInport extends AppInport<UploadRequest, UploadResponse> {
  fileChange(dto: UploadRequest): Promise<UploadResponse>;
}
