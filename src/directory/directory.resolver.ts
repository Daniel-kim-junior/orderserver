import { Args, Query, Resolver } from '@nestjs/graphql';
import { Directory } from './directory.model';

@Resolver()
export class DirResolver {
  @Query(() => Boolean)
  async uploadFile(@Args('input') input: Directory): Promise<boolean> {
    console.log(input);
    return true;
  }
}
