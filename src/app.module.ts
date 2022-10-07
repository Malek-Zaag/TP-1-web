import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import {PremierController} from "./premier/premier.controller";
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoControllerController } from './todo-module/todo-controller/todo-controller.controller';
import { TodoServiceService } from './todo-service/todo-service.service';
import { CommonModuleModule } from './common-module/common-module.module';

@Module({
  imports: [PremierModule, TodoModuleModule, CommonModuleModule],
  controllers: [AppController,PremierController, TodoControllerController],
  providers: [AppService, TodoServiceService],
})
export class AppModule {}
