import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/CreateCategoryDto';
import { UpdateCategoryDto } from './dto/UpdateCategoryDto';
import User from 'src/users/models/users.entity';
import Service from '../service/models/service.entity';
import Category from './models/Category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
    @InjectRepository(Service)
    private servRepo: Repository<Service>,
  ) {}

  getCategories() {
    return this.categoryRepo.find();
  }

  async getCategoryById(id: string) {
    const category = await this.categoryRepo.findOne(id);
    if (category) {
      return category;
    }
    throw new HttpException('category not found', HttpStatus.NOT_FOUND);
  }
  async createCategory(categoryDto: CreateCategoryDto) {
    try {
      const service = await this.servRepo.findOne(categoryDto.idCategory);
      if (!service) {
        throw new HttpException('service not found', HttpStatus.NOT_FOUND);
      }
      const newCategory = this.categoryRepo.create({
        ...categoryDto,
        service: service,
      });
      await this.categoryRepo.save(newCategory);
      return newCategory;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async updateCategory(id: string, categoryDto: UpdateCategoryDto) {
    await this.categoryRepo.update(id, categoryDto);
    const updatedCategory = await this.categoryRepo.findOne(id);
    if (updatedCategory) {
      return updatedCategory;
    }
    throw new NotFoundException('Category not found');
  }
  async deleteCategory(id: string) {
    const deleteResponse = await this.categoryRepo.delete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException('Category not found');
    }
  }
}
