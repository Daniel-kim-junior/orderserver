// upload.dto.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UploadCompressedDepInput {
  @Field()
  compressedString: string;

  @Field()
  email: string;
}
