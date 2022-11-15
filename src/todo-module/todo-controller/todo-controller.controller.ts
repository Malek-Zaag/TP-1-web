import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Version,
} from '@nestjs/common';
import { TodoModel } from '../todoModel';
import { TodoDto } from '../dto/TodoDto';
import { updateTodoDto } from '../dto/updateTodoDto';
import { TodoServiceService } from '../../todo-service/todo-service.service';
import { TodoEntity } from '../Entity/todoEntity';

@Controller('todo')
export class TodoControllerController {
  constructor(private todoService: TodoServiceService) {}

  @Get('')
  @Version('1')
  getTodos(): TodoModel[] {
    return this.todoService.getTodo();
  }

  @Get('')
  @Version('2')
  async getTodos2(): Promise<TodoEntity[]> {
    return await this.todoService.getTodo2();
  }

  @Get(':id')
  @Version('1')
  getTodoById(@Param('id') id: string): TodoModel {
    return this.todoService.getTodoById(id);
  }

  @Get(':id')
  @Version('2')
  async getTodoById2(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TodoEntity[]> {
    return await this.todoService.getTodo3(id);
  }

  @Post('')
  @Version('1')
  addTodo(@Body() body: TodoDto): TodoModel {
    return this.todoService.postTodo(body);
  }

  @Post('')
  @Version('2')
  async addTodoDto2(@Body() newTodoDto: TodoDto): Promise<TodoEntity> {
    return await this.todoService.addTodoDTOv2(newTodoDto);
  }

  @Put(':id')
  @Version('1')
  modifyById(@Param('id') id: string, @Body() body: updateTodoDto): string {
    return this.todoService.updateTodo(id, body);
  }

  @Put(':id')
  @Version('2')
  async updateTodoDto2(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: updateTodoDto,
  ): Promise<TodoEntity> {
    return await this.todoService.updateTodoDto2(id, updateTodoDto);
  }

  @Delete(':id')
  @Version('1')
  deleteTodoById(@Param('id') id: string): string {
    return this.todoService.deleteTodo(id);
  }

  @Delete('/:id')
  @Version('2')
  async deleteTodoByIDv2(@Param('id', ParseIntPipe) id: number) {
    return await this.todoService.deleteTodoByIDv2(id);
  }

  @Delete('/softDelete/:id')
  async softDeleteTodoByID(@Param('id', ParseIntPipe) id: number) {
    return await this.todoService.softDeleteTodoByID(id);
  }
}
