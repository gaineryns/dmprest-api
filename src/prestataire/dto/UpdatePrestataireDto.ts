import { IsUUID } from 'class-validator';

export class UpdatePrestataireDto {
  @IsUUID()
  id: string;

  presentation: string;

  enable: boolean;

  formation: string;
}
