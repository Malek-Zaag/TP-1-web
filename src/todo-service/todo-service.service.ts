import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from '../todo-module/TodoModel';
import { TodoDto } from '../todo-module/dto/todoDto';
import { updateTodoDto } from '../todo-module/dto/updateTodoDto';

@Injectable()
export class TodoServiceService {
  private todos: TodoModel[] = [];

  findTodo(id: string): TodoModel {
    const todo = this.todos.find((todo) => todo.id == id);
    if (!todo) throw new NotFoundException();
    return todo;
  }

  getTodo(): TodoModel[] {
    return this.todos;
  }

  postTodo(body: TodoDto): TodoModel {
    const todo = new TodoModel();
    todo.name = body.name;
    todo.description = body.description;
    this.todos.push(todo);
    return todo;
  }

  getTodoById(id: string): TodoModel {
    return this.findTodo(id);
  }

  deleteTodo(id: string): string {
    const todo = this.findTodo(id);
    this.todos = this.todos.filter((todo) => todo.id != id);
    return 'todo deleted successfully';
  }

  updateTodo(id: string, body: updateTodoDto): string {
    const todo = this.findTodo(id);
    if (body.name) todo.name = body.name;
    if (todo.description) todo.description = body.description;
    if (todo.statut) todo.statut = body.statut;
    return 'todo modified successfully';
  }
}
