import { Request } from '../../common/request.dto';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsBoolean } from 'class-validator';

export class FindOneRequest implements Request {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  isTrue: boolean;
}
