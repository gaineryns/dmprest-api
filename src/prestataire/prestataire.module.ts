import { Module } from '@nestjs/common';
import { PrestataireController } from './prestataire.controller';
import { PrestataireService } from './prestataire.service';

@Module({
  controllers: [PrestataireController],
  providers: [PrestataireService]
})
export class PrestataireModule {}
