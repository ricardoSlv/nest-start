import { Field, ID, ObjectType, ResolveField } from "@nestjs/graphql";

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title!: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate(): Date {
    return new Date();
  }

  @Field((_type) => [String])
  ingredients!: string[];

  @Field((_type) => String)
  list: string;
}
