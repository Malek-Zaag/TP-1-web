import { Module } from '@nestjs/common';
import { TodoControllerController } from './todo-controller/todo-controller.controller';
import { TodoServiceService } from '../todo-service/todo-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './Entity/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoControllerController],
  providers: [TodoServiceService],
})
export class TodoModuleModule {}
