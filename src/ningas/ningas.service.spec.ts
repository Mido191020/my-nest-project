import { Test, TestingModule } from '@nestjs/testing';
import { NingasService } from './ningas.service';

describe('NingasService', () => {
  let service: NingasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NingasService],
    }).compile();

    service = module.get<NingasService>(NingasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
