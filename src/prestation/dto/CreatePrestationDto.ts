import { IsNotEmpty, IsString } from "class-validator";

export class CreatePrestationDto {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}
