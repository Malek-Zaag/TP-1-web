import { Test, TestingModule } from '@nestjs/testing';
import { TodoServiceService } from './todo-service.service';

describe('TodoServiceService', () => {
  let service: TodoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoServiceService],
    }).compile();

    service = module.get<TodoServiceService>(TodoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
