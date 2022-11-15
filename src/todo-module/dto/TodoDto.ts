import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ErrorMessages } from './errorMessages';

export class TodoDto {
  @MinLength(3, {
    message: ErrorMessages.lengthProblem,
  })
  @MaxLength(10, {
    message: ErrorMessages.lengthProblem,
  })
  @IsNotEmpty({
    message: ErrorMessages.isEmpty,
  })
  name: string;
  @MinLength(10, {
    message: ErrorMessages.lengthProblem,
  })
  @IsNotEmpty({
    message: ErrorMessages.isEmpty,
  })
  description: string;
}
