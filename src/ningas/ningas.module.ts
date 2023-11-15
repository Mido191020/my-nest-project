import { Module } from '@nestjs/common';
import { NingasController } from './ningas.controller';
import { NingasService } from './ningas.service';

@Module({
  controllers: [NingasController],
  providers: [NingasService]
})
export class NingasModule {}
