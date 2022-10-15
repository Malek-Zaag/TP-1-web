import { PartialType } from '@nestjs/mapped-types';
import { TodoDto } from './todoDto';
import { IsNotEmpty, NotEquals } from 'class-validator';
import { ErrorMessages } from './errorMessages';
import { Status } from '../status';

export class updateTodoDto extends PartialType(TodoDto) {
  @IsNotEmpty({ message: ErrorMessages.isEmpty })
  @NotEquals(Status.waiting || Status.actif || Status.done, {
    message: ErrorMessages.statusProblem,
  })
  statut: string;
}
