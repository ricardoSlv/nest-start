import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  Header,
  UseInterceptors,
} from '@nestjs/common'
import { CookiesService } from './cookies.service'
import { CreateCookyDto } from './dto/create-cooky.dto'
import { UpdateCookyDto } from './dto/update-cooky.dto'
import { Response } from 'express'
import { UploadedFile } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import * as fsPromises from 'fs/promises'

@Controller()
export class CookiesController {
  constructor(private readonly cookiesService: CookiesService) {}

  @Post()
  create(@Body() createCookyDto: CreateCookyDto) {
    return this.cookiesService.create(createCookyDto)
  }

  @Get()
  findAll() {
    return this.cookiesService.findAll()
  }

  @Get('ola')
  findOne(@Param('id') id: string) {
    return this.cookiesService.findOne(+id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCookyDto: UpdateCookyDto,
    @Res() res: Response
  ) {
    res.download('./valheim.png')
    //res.sendFile(__dirname + "/valheim.png");

    // res.status(200).jsonp({ ola: "3" });
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(fsPromises)
    await fsPromises.writeFile('file.png', file.buffer)
    console.log(file)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cookiesService.remove(+id)
  }
}
