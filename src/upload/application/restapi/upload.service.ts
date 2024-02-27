import { Request } from '../common/request.dto';
import { UploadInport } from '../common/upload.port';

export class UploadRestService implements UploadInport {
  uploadCompressedDep(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  findOne(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  create(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  update(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
