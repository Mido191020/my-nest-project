import { Test, TestingModule } from '@nestjs/testing';
import { NingasController } from './ningas.controller';

describe('NingasController', () => {
  let controller: NingasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NingasController],
    }).compile();

    controller = module.get<NingasController>(NingasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
