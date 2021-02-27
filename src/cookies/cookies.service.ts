import { Injectable } from "@nestjs/common";
import { CreateCookyDto } from "./dto/create-cooky.dto";
import { UpdateCookyDto } from "./dto/update-cooky.dto";
import { Cooky } from "./entities/cooky.entity";

@Injectable()
export class CookiesService {
  private cookies: Cooky[] = [];

  create(createCookyDto: CreateCookyDto): Cooky {
    const newCookie = new Cooky(createCookyDto.name);
    this.cookies.push(newCookie);
    return newCookie;
  }

  findAll(): Cooky[] {
    return this.cookies;
  }

  findOne(id: number): Cooky | string {
    return this.cookies[id] || "No cookie";
  }

  update(id: number, updateCookyDto: UpdateCookyDto) {
    return `This action updates a #${id} cooky`;
  }

  remove(id: number) {
    return `This action removes a #${id} cooky`;
  }
}
