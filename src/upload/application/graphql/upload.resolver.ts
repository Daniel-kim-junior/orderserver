import { Args, Query, Resolver } from '@nestjs/graphql';
import { UploadCompressedDepInput, UploadOutput } from './dto/upload.dto';
import { Response } from '../common/response.dto';

@Resolver()
export class UploadResolver {
  @Query(() => UploadOutput)
  async uploadCompressedDep(
    @Args('input') input: UploadCompressedDepInput,
  ): Promise<Response> {
    console.log(input);
    return null;
  }
}
