import { Args, Query, Resolver } from '@nestjs/graphql';
import { UploadCompressedDepInput } from './upload.dto';

@Resolver()
export class UploadResolver {
  @Query(() => String)
  async uploadCompressedDep(@Args('input') input: UploadCompressedDepInput) {
    console.log('Received compressed string:', input.compressedString);
    console.log('Received email:', input.email);
    return 'upload success';
  }
}
