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
    const openai = new OpenAI({
      apiKey: input.APIKey,
    });
    const result = await openai.chat.completions.create({
      messages: [{ role: 'system', content: input.compressedString }],
      model: 'gpt-3.5-turbo',
    });
    console.log(result.choices[0]);
    return 'upload success';
  }
}
