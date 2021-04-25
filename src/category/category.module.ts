import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import Service from '../service/models/service.entity';
import Category from './models/Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Service])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
