import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateServiceDto {
  @IsNotEmpty()
  name: string;
}
