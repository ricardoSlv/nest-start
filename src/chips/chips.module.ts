import { Module } from '@nestjs/common'
import { ChipsService } from './chips.service'
import { ChipsController } from './chips.controller'

@Module({
  controllers: [ChipsController],
  providers: [ChipsService],
})
export class ChipsModule {}
