import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { ChipsService } from './chips.service'
import { CreateChipDto } from './dto/create-chip.dto'
import { UpdateChipDto } from './dto/update-chip.dto'

@Controller()
export class ChipsController {
  constructor(private readonly chipsService: ChipsService) {}

  @Post()
  create(@Body() createChipDto: CreateChipDto) {
    return this.chipsService.create(createChipDto)
  }

  @Get()
  findAll() {
    return this.chipsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('si') si: string) {
    return `Id is ${id}, Si is ${si}`
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateChipDto: UpdateChipDto) {
    return this.chipsService.update(+id, updateChipDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chipsService.remove(+id)
  }
}
