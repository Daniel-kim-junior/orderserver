import { Args, Query, Resolver } from '@nestjs/graphql';
import { UploadCompressedDepInput } from './application/graphql/dto/upload.dto';
// import { zlib } from 'zlib';

@Resolver()
export class UploadResolver {
  @Query(() => String)
  async uploadCompressedDep(@Args('input') input: UploadCompressedDepInput) {
    console.log(input);
    return 'upload success';
  }
}
