import { UploadInport } from '../common/upload.port';
import { Request } from '../common/request.dto';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UploadCompressedDepInput } from './dto/upload.dto';
import { Response } from '../common/response.dto';

@Resolver()
export class UploadGraphQLService implements UploadInport {
  @Query(() => Promise<Response>)
  async uploadCompressedDep(@Args('input') input: UploadCompressedDepInput) {
    console.log(input);
    return null;
  }
  @Query()
  async findOne(dto: FindeOneRequest): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  create(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  update(dto: Request): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
