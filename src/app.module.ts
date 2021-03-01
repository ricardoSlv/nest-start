import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { RecipesModule } from './recipes/recipes.module'
import { UsersModule } from './users/users.module'
import { CookiesModule } from './cookies/cookies.module'
import { RouterModule, Routes } from 'nest-router'
import { ChipsModule } from './chips/chips.module'

const routes: Routes = [
  {
    path: '/cookies/:si',
    module: CookiesModule,
    children: [
      {
        path: '/chips',
        module: ChipsModule,
      },
    ],
  },
]

@Module({
  imports: [
    ConfigModule.forRoot(),

    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    RecipesModule,
    UsersModule,

    RouterModule.forRoutes(routes),
    CookiesModule,
    ChipsModule,
  ],
})
export class AppModule {}
