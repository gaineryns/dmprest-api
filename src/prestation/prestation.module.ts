import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestationController } from './prestation.controller';
import Prestation from './prestation.entity';
import { PrestationService } from './prestation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prestation])],
  controllers: [PrestationController],
  providers: [PrestationService],
})
export class PrestationModule {}
