import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { PremierController } from './premier/premier.controller';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoControllerController } from './todo-module/todo-controller/todo-controller.controller';
import { TodoServiceService } from './todo-service/todo-service.service';
import { CommonModuleModule } from './common-module/common-module.module';
import { CustomPipeController } from './custom-pipe/custom-pipe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo-module/Entity/todoEntity';

@Module({
  imports: [
    PremierModule,
    TodoModuleModule,
    CommonModuleModule,
    TypeOrmModule.forFeature([TodoEntity]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-tp',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    PremierController,
    TodoControllerController,
    CustomPipeController,
  ],
  providers: [AppService, TodoServiceService],
})
export class AppModule {}
