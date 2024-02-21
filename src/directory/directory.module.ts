import { Module } from '@nestjs/common';
import { DirResolver } from './directory.resolver';

@Module({
  providers: [DirResolver],
})
export class DirectoryModule {}
