import { Field, InputType } from '@nestjs/graphql';
import { GraphQLUpload, Upload } from 'graphql-upload-ts';

@InputType()
export class Directory {
  @Field(() => GraphQLUpload)
  fileList: Upload;
}
