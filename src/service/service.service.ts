import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Service from "./models/service.entity";
import {CreateServiveDto} from "./dto/CreateServiveDto";
import {UpdateServiceDto} from "./dto/UpdateServiceDto";

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private ServRepo: Repository<Service>,
  ) {}

  // category
  async getServices() {
    return await this.ServRepo.find();
  }

  async getServiceById(id: string) {
    const category = await this.ServRepo.findOne(id, {
      relations: ['Categories'],
    });
    if (category) {
      return category;
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
  }

  async createService(categoryDto: CreateServiveDto) {
    try {
      const newService = await this.ServRepo.create({
        ...categoryDto,
      });
      await this.ServRepo.save(newService);
      return newService;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async updateService(id: string, category: UpdateServiceDto) {
    await this.ServRepo.update(id, category);
    const updatedService = await this.ServRepo.findOne(id);
    if (updatedService) {
      return updatedService;
    }
    throw new NotFoundException('Category not found');
  }

  async deleteService(id: string) {
    const deleteResponse = await this.ServRepo.delete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException('Category not found');
    }
  }
}
