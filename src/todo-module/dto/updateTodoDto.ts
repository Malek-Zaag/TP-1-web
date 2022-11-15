import { PartialType } from '@nestjs/mapped-types';
import { TodoDto } from './TodoDto';
import { IsIn, IsOptional } from 'class-validator';
import { ErrorMessages } from './errorMessages';
import { Status } from '../status';

export class updateTodoDto extends PartialType(TodoDto) {
  @IsOptional({ message: ErrorMessages.isEmpty })
  @IsIn([Status.waiting, Status.actif, Status.done], {
    message: ErrorMessages.statusProblem,
  })
  statut: string;
}
