import { Test, TestingModule } from '@nestjs/testing';
import { CookiesController } from './cookies.controller';
import { CookiesService } from './cookies.service';

describe('CookiesController', () => {
  let controller: CookiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookiesController],
      providers: [CookiesService],
    }).compile();

    controller = module.get<CookiesController>(CookiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
