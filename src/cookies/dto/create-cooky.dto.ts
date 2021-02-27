import { Field } from "@nestjs/graphql";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateCookyDto {
  @Field((_type) => String)
  @MaxLength(30)
  @IsAlphanumeric()
  name: string;
}
