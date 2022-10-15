import { Test, TestingModule } from '@nestjs/testing';
import { CustomPipeController } from './custom-pipe.controller';

describe('CustomPipeController', () => {
  let controller: CustomPipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomPipeController],
    }).compile();

    controller = module.get<CustomPipeController>(CustomPipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
