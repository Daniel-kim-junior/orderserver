import { Args, Query, Resolver } from '@nestjs/graphql';
import { UploadCompressedDepInput } from './upload.dto';
// import { zlib } from 'zlib';
import OpenAI from 'openai';

@Resolver()
export class UploadResolver {
  @Query(() => String)
  async uploadCompressedDep(@Args('input') input: UploadCompressedDepInput) {
    // Buffer.unzip(input.compressedString, (err, result) => {
    //   if (err) {
    //     console.error('디코딩 오류', err);
    //     return;
    //   }
    // });
    console.log(1);
    const openai = new OpenAI();
    const result = await openai.chat.completions.create({
      messages: [{ role: 'user', content: input.compressedString }],
      model: 'gpt-4-0125-preview',
    });
    console.log(result.choices[0]);
    return 'upload success';
  }
}
