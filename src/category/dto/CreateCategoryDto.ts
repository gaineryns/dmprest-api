import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {

  description: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  idCategory: string;
}
