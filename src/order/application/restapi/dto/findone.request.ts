import { Request } from '../../common/request.interface';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsBoolean } from 'class-validator';
import { PartialType, PickType } from '@nestjs/mapped-types';

export class FindOneRequest implements Request {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @Type(() => Boolean)
  @IsBoolean()
  readonly isTrue: boolean;
}

export class UpdateIdRequest extends PartialType(
  PickType(FindOneRequest, ['id'] as const),
) {}
