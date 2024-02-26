import { Args, Query, Resolver } from '@nestjs/graphql';
import { UploadCompressedDepInput } from './upload.dto';
// import { zlib } from 'zlib';
import OpenAI from 'openai';

@Resolver()
export class UploadResolver {
  @Query(() => String)
  async uploadCompressedDep(@Args('input') input: UploadCompressedDepInput) {
    console.log(input);
    return 'upload success';
  }
}
