import { Module } from '@nestjs/common';
import { UploadRestService } from './application/restapi/upload.service';
import { UploadResolver } from './application/graphql/upload.resolver';
import { UploadControllerV2 } from './application/restapi/upload.app';

@Module({
  providers: [
    { provide: 'service-v2', useClass: UploadRestService },
    UploadResolver,
  ],
  controllers: [UploadControllerV2],
})
export class UploadModule {}
