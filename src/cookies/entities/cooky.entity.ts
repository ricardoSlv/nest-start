import { Field } from "@nestjs/graphql";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class Cooky {
  constructor(public name: string) {}
}
