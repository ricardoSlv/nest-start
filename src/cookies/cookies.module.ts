import { Module } from "@nestjs/common";
import { CookiesService } from "./cookies.service";
import { CookiesController } from "./cookies.controller";
import { ChipsModule } from "../chips/chips.module";

@Module({
  controllers: [CookiesController],
  providers: [CookiesService],
})
export class CookiesModule {}
