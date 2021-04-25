import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServiveDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
