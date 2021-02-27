import { PartialType } from '@nestjs/mapped-types';
import { CreateCookyDto } from './create-cooky.dto';

export class UpdateCookyDto extends PartialType(CreateCookyDto) {}
