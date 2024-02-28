import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import { ENV_KEYS } from './constants';

type DBConfig = {
  type: 'mysql' | 'mariadb';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
};

export class SingleTonDBConfig {
  private constructor() {}
  static getInstance(): TypeOrmModuleOptions {
    const dbConfig = Object.freeze(config.get('db') as DBConfig);
    return Object.freeze({
      type: dbConfig.type,
      host: ENV_KEYS.RDS_HOSTNAME || dbConfig.host,
      port: ENV_KEYS.RDS_PORT || dbConfig.port,
      username: ENV_KEYS.RDS_USERNAME || dbConfig.username,
      password: ENV_KEYS.RDS_PASSWORD || dbConfig.password,
      database: ENV_KEYS.RDS_DB_NAME || dbConfig.database,
      synchronize: dbConfig.synchronize,
      entities: [__dirname + '/../**/*.entity.{js, ts}'],
      logging: true,
    }) as TypeOrmModuleOptions;
  }
}
