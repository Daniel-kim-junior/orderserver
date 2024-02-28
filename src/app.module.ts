import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SingleTonDBConfig } from './util/db.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   sortSchema: true,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // }),
    OrderModule,
    TypeOrmModule.forRoot(SingleTonDBConfig.getInstance()),
  ],
})
export class AppModule {}
