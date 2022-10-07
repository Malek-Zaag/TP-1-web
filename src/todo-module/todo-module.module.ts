import {Module} from '@nestjs/common';
import {TodoControllerController} from "./todo-controller/todo-controller.controller";
import {TodoServiceService} from "../todo-service/todo-service.service";

@Module({
    imports: [],
    controllers: [TodoControllerController],
    providers: [TodoServiceService]
})
export class TodoModuleModule {
}
