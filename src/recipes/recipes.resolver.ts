import { NotFoundException } from "@nestjs/common";
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { NewRecipeInput } from "./dto/new-recipe.input";
import { RecipesArgs } from "./dto/recipes.args";
import { Recipe } from "./models/recipe.model";
import { RecipesService } from "./recipes.service";

const pubSub = new PubSub();

@Resolver((_of: Recipe) => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @ResolveField(() => String)
  id(): string {
    return "Placeholder";
  }

  @ResolveField(() => String)
  list(@Parent() rec: Recipe): string {
    return rec.ingredients.join("");
  }

  @Query((_returns) => Recipe)
  async recipe(@Args("id") id: string) {
    const recipe = await this.recipesService.findOneById(id);
    if (!recipe) {
      throw new NotFoundException(id);
    }
    return { ...recipe };
  }

  @Query((_returns) => [Recipe])
  recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesService.findAll(recipesArgs);
  }

  @Mutation((_returns) => Recipe)
  async addRecipe(
    @Args("newRecipeData") newRecipeData: NewRecipeInput
  ): Promise<Recipe> {
    const recipe = await this.recipesService.create(newRecipeData);
    pubSub.publish("recipeAdded", { recipeAdded: recipe });
    return recipe;
  }

  @Mutation((_returns) => Boolean)
  async removeRecipe(@Args("id") id: string): Promise<boolean> {
    return this.recipesService.remove(id);
  }

  @Subscription((_returns) => Recipe)
  recipeAdded(): AsyncIterator<unknown, any, undefined> {
    return pubSub.asyncIterator("recipeAdded");
  }
}
