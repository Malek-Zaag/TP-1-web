import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCvDto {
  @IsNotEmpty()
  @MinLength(3, { message: 'taille minimum du nom est 3' })
  name: string;

  @MinLength(3)
  @MaxLength(15)
  @IsNotEmpty()
  firstname: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsNotEmpty()
  @IsNumber()
  cin: number;

  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  job: string;

  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  path: string;
}
