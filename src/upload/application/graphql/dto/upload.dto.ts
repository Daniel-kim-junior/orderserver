// upload.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { Request } from '../../common/request.dto';

@InputType()
export class UploadCompressedDepInput implements Request {
  @Field()
  compressedString: string;

  @Field()
  email: string;
}
