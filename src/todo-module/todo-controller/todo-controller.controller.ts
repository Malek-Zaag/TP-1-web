import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TodoModel} from "../TodoModel";
import {TodoDto} from "../dto/todoDto";
import {updateTodoDto} from "../dto/updateTodoDto";
import {TodoServiceService} from "../../todo-service/todo-service.service";

@Controller('todo')
export class TodoControllerController {


    constructor(private todoService: TodoServiceService) {
    }

    @Get()
    getTodos(): TodoModel[] {
        return this.todoService.getTodo();
    }

    @Post()
    addTodo(@Body() body: TodoDto): TodoModel {
        return this.todoService.postTodo(body);
    }

    @Get(':id')
    getTodoById(@Param('id') id: string): TodoModel {
        return this.todoService.getTodoById(id);
    }

    @Delete(':id')
    deleteTodoById(@Param('id') id: string): string {
        return this.todoService.deleteTodo(id);
    }

    @Put(':id')
    modifyById(@Param('id') id: string, @Body() body: updateTodoDto): string {
        return this.todoService.updateTodo(id, body);
    }
}
