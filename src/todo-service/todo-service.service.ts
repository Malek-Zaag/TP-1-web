import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from '../todo-module/todoModel';
import { TodoDto } from '../todo-module/dto/todo.dto';
import { updateTodoDto } from '../todo-module/dto/updateTodoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from '../todo-module/Entity/todo.entity';
import { Like, Repository } from 'typeorm';
import { Status } from '../todo-module/status';

@Injectable()
export class TodoServiceService {
  private todos: TodoModel[] = [];

  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  findTodo(id: string): TodoModel {
    const todo = this.todos.find((todo) => todo.id == id);
    if (!todo) throw new NotFoundException();
    return todo;
  }

  getTodoById(id: string): TodoModel {
    return this.findTodo(id);
  }

  getTodo(): TodoModel[] {
    return this.todos;
  }

  async getTodo2(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async getTodo3(id: number): Promise<TodoEntity[]> {
    return await this.todoRepository.findBy({ id: id });
  }

  postTodo(body: TodoDto): TodoModel {
    const todo = new TodoModel();
    todo.name = body.name;
    todo.description = body.description;
    this.todos.push(todo);
    return todo;
  }

  async addTodoDTOv2(newTodoDto: TodoDto): Promise<TodoEntity> {
    return await this.todoRepository.save(newTodoDto);
  }

  updateTodo(id: string, body: updateTodoDto): string {
    const todo = this.findTodo(id);
    if (body.name) todo.name = body.name;
    if (todo.description) todo.description = body.description;
    if (todo.statut) todo.statut = body.statut;
    return 'todo modified successfully';
  }

  async updateTodoDto2(
    id: number,
    updateTodoDto: updateTodoDto,
  ): Promise<TodoEntity> {
    const newTodo = await this.todoRepository.preload({ id, ...updateTodoDto });
    if (!newTodo) throw new NotFoundException();
    return await this.todoRepository.save(newTodo);
  }

  deleteTodo(id: string): string {
    const todo = this.findTodo(id);
    this.todos = this.todos.filter((todo) => todo.id != id);
    return 'todo deleted successfully';
  }

  async deleteTodoByIDv2(id: number) {
    return await this.todoRepository.delete(id);
  }

  async softDeleteTodoByID(id: number) {
    return await this.todoRepository.softDelete(id);
  }

  async restoreTodoByID(id: number) {
    return await this.todoRepository.restore(id);
  }

  async countByStatus() {
    return (
      'actif :' +
      (await this.todoRepository.countBy({ status: Status.actif })) +
      ' waiting : ' +
      (await this.todoRepository.countBy({ status: Status.waiting })) +
      ' done : ' +
      (await this.todoRepository.countBy({ status: Status.done }))
    );
  }

  async getTodov3(statusParam, data): Promise<TodoEntity[]> {
    return await this.todoRepository.find({
      where: [
        {
          status: statusParam,
        },
        {
          name: Like(`%${data}%`),
        },
        {
          description: Like(`%${data}%`),
        },
      ],
    });
  }

  async getTodoByStatusAndData(statusParam, data): Promise<TodoEntity[]> {
    return await this.todoRepository.find({
      where: [
        {
          name: Like(`%${data}%`),
        },
        {
          description: Like(`%${data}%`),
          status: statusParam,
        },
      ],
    });
  }

  async getTodosPaginated(param): Promise<TodoEntity[]> {
    return await this.todoRepository.find({
      skip: (param.page - 1) * param.take,
      take: param.take,
    });
  }
}
