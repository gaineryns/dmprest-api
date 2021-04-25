import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePrestataireDto {
  @IsNotEmpty()
  @IsString()
  presentation: string;

  enable: boolean;

  formation: string;
}
