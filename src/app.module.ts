import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import {PremierController} from "./premier/premier.controller";

@Module({
  imports: [PremierModule],
  controllers: [AppController,PremierController],
  providers: [AppService],
})
export class AppModule {}
