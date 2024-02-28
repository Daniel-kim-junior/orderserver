import { Injectable } from '@nestjs/common';
import { Request } from '../common/request.dto';
import { UploadInport } from '../common/upload.port';

@Injectable()
export class UploadRestService implements UploadInport {
  uploadCompressedDep(dto: Request): Promise<Response> {
    console.log(dto);
    return null;
  }
  findOne(dto: Request): Promise<Response> {
    console.log(dto);
    return null;
  }
  create(dto: Request): Promise<Response> {
    console.log(dto);
    return null;
  }
  update(dto: Request): Promise<Response> {
    console.log(dto);
    return null;
  }
}
