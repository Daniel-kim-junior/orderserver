import { Request } from './request.dto';
import { Response } from './response.dto';

export interface AppInport<req extends Request, res extends Response> {
  findOne(dto: req): Promise<res>;
  create(dto: req): Promise<res>;
  update(dto: req): Promise<res>;
}
