import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3, { message: 'taille minimum de username 3' })
  username: string;

  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  email: string;

  @MinLength(3)
  @MaxLength(10)
  @IsNotEmpty()
  password: string;
}
