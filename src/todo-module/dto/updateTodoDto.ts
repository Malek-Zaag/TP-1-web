import {PartialType} from "@nestjs/mapped-types";
import {TodoDto} from "./todoDto";

export class updateTodoDto extends PartialType(TodoDto) {
    statut: string
}