// upload.dto.ts
import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Request } from '../../common/request.dto';
import { Response } from '../../common/response.dto';

@InputType()
export class UploadCompressedDepInput implements Request {
  @Field()
  compressedString: string;

  @Field()
  email: string;
}

@ObjectType()
export class UploadOutput implements Response {
  @Field(() => String)
  output: string;
}
