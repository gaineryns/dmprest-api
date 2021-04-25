import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePrestationDto {
  description: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  idCategory: string;
}
