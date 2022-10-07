import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {TodoModel} from "../TodoModel";
import {TodoDto} from "../dto/todoDto";
import {updateTodoDto} from "../dto/updateTodoDto";

@Controller('todo')
export class TodoControllerController {
    private todos: TodoModel[] = []

    @Get()
    getTodos(): TodoModel[] {
        return this.todos;
    }

    @Post()
    addTodo(@Body() body: TodoDto): string {
        const todo = new TodoModel();
        todo.name = body.name;
        todo.description = body.description;
        this.todos.push(todo);
        return "todo added successfully";
    }

    @Get('/:id')
    getTodoById(@Param() id: string): TodoModel {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        return todo;
    }

    @Delete('/:id')
    deleteTodoById(@Param() id: string): string {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        return "todo deleted successfully";
    }

    @Put('/:id')
    modifyById(@Param() id: string, @Body() body: updateTodoDto): string {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        todo.name = body.name;
        todo.description = body.description;
        todo.statut = body.statut;
        return "todo modified successfully"
    }
}
