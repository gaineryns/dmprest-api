import { IsNotEmpty, IsUUID } from "class-validator";

export class UpdateCategoryDto {
  @IsUUID()
  id: string;

  description: string;
  @IsNotEmpty()
  name: string;
}
