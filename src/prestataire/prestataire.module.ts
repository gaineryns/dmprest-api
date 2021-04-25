import { Module } from '@nestjs/common';
import { PrestataireController } from './prestataire.controller';
import { PrestataireService } from './prestataire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Prestataire from './models/prestataire.entity';
import User from '../users/models/users.entity';
import Service from '../service/models/service.entity';
import Category from '../category/models/Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestataire, User, Service, Category])],
  controllers: [PrestataireController],
  providers: [PrestataireService],
})
export class PrestataireModule {}
