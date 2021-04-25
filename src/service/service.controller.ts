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
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import { FindOneParams } from '../utils/findOneParams';
import { ServiceService } from './service.service';
import { CreateServiveDto } from './dto/CreateServiveDto';
import { UpdateServiceDto } from './dto/UpdateServiceDto';

@Controller('service')
export class ServiceController {
  constructor(private readonly categoryService: ServiceService) {}

  @Get()
  getCategories() {
    return this.categoryService.getServices();
  }

  @Get(':id')
  getCategoryById(@Param() { id }: FindOneParams) {
    return this.categoryService.getServiceById(id);
  }

  @Post()
  //@UseGuards(JwtAuthenticationGuard)
  async createCategory(@Body() categoryDto: CreateServiveDto) {
    return this.categoryService.createService(categoryDto);
  }
  @Put(':id')
  //@UseGuards(JwtAuthenticationGuard)
  async replaceCategory(
    @Param('id') id: string,
    @Body() categoryDto: UpdateServiceDto,
  ) {
    return this.categoryService.updateService(id, categoryDto);
  }
  @Delete(':id')
  //@UseGuards(JwtAuthenticationGuard)
  async deleteCategory(@Param('id') id: string) {
    await this.categoryService.deleteService(id);
  }
}
