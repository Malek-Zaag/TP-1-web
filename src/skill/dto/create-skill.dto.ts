import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  @MinLength(3, { message: 'taille minimum de designation 3' })
  designation: string;
}
