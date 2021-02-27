import { Injectable } from '@nestjs/common'
import { CreateChipDto } from './dto/create-chip.dto'
import { UpdateChipDto } from './dto/update-chip.dto'

@Injectable()
export class ChipsService {
  create(createChipDto: CreateChipDto) {
    return 'This action adds a new chip'
  }

  findAll() {
    return `This action returns all chips`
  }

  findOne(id: number) {
    return `This action returns a #${id} chip`
  }

  update(id: number, updateChipDto: UpdateChipDto) {
    return `This action updates a #${id} chip`
  }

  remove(id: number) {
    return `This action removes a #${id} chip`
  }
}
