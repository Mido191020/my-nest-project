import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NingasModule } from './ningas/ningas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NingasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
