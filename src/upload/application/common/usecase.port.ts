import { Request } from './request.dto';
import { Response } from './response.dto';

export interface AppInport<res extends Response> {
  findOne(dto: Request): Promise<res>;
  create(dto: Request): Promise<res>;
  update(dto: Request): Promise<res>;
}
