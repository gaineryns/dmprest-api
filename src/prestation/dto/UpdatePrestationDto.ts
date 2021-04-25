import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class UpdatePrestationDto {
  @IsUUID()
  id: string;

  description: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
