import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as config from 'config';
type ServerConfig = {
  port: number;
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = config.get('server') as ServerConfig;
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(server.port);
}
bootstrap();
