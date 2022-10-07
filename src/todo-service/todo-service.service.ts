import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import {TodoModel} from "../todo-module/TodoModel";
import {TodoDto} from "../todo-module/dto/todoDto";
import {updateTodoDto} from "../todo-module/dto/updateTodoDto";

@Injectable()
export class TodoServiceService {
    private todos: TodoModel[] = []

    getTodo(): TodoModel[] {
        return this.todos;
    }

    postTodo(@Inject('uuid_provider') id, body: TodoDto): string {
        const todo = new TodoModel();
        todo.id = id;
        todo.name = body.name;
        todo.description = body.description;
        this.todos.push(todo);
        return "todo added successfully";
    }

    getTodoById(id: string): TodoModel {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        return todo;
    }

    deleteTodo(id: string): string {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        return "todo deleted successfully";
    }

    updateTodo(id: string, body: updateTodoDto): string {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException();
        todo.name = body.name;
        todo.description = body.description;
        todo.statut = body.statut;
        return "todo modified successfully"
    }

}
