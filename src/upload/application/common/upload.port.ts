import { Request } from './request.dto';
import { AppInport } from './usecase.port';

export interface UploadInport extends AppInport<Response> {
  uploadCompressedDep(dto: Request): Promise<Response>;
}
