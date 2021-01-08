import { IsNotEmpty, IsUUID } from "class-validator";

export class UpdatePrestationDto {
  @IsUUID()
  id: string;
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  title: string;
}
