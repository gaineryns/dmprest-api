import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryDto } from './dto/UpdateCategoryDto';
import { CreateCategoryDto } from './dto/CreateCategoryDto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import { FindOneParams } from '../utils/findOneParams';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  getCategoryById(@Param() { id }: FindOneParams) {
    return this.categoryService.getCategoryById(id);
  }

  @Post()
  //@UseGuards(JwtAuthenticationGuard)
  async createCategory(@Body() category: CreateCategoryDto) {
    return this.categoryService.createCategory(category);
  }

  @Put(':id')
  //@UseGuards(JwtAuthenticationGuard)
  async replaceCategory(
    @Param('id') id: string,
    @Body() category: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, category);
  }

  @Delete(':id')
  //@UseGuards(JwtAuthenticationGuard)
  async deleteCategory(@Param('id') id: string) {
    await this.categoryService.deleteCategory(id);
  }
}
