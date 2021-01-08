import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Prestation from './prestation.entity';
import { CreatePrestationDto } from './dto/CreatePrestationDto';
import { UpdatePrestationDto } from './dto/UpdatePrestationDto';

@Injectable()
export class PrestationService {
  constructor(
    @InjectRepository(Prestation)
    private prestationRepo: Repository<Prestation>,
  ) {}

  getAllPrestations() {
    return this.prestationRepo.find();
  }

  async getPrestationById(id: string) {
    const prestation = await this.prestationRepo.findOne(id);
    if (prestation) {
      return prestation;
    }
    throw new HttpException('Prestation not found', HttpStatus.NOT_FOUND);
  }

  async createPrestation(prestation: CreatePrestationDto) {
    const newPrestation = await this.prestationRepo.create(prestation);
    await this.prestationRepo.save(newPrestation);
    return newPrestation;
  }

  async updatePrestation(id: string, prestation: UpdatePrestationDto) {
    await this.prestationRepo.update(id, prestation);
    const updatedPrestation = await this.prestationRepo.findOne(id);
    if (updatedPrestation) {
      return updatedPrestation;
    }
    throw new NotFoundException('Prestation not found');
  }
  async deletePrestation(id: string) {
    const deleteResponse = await this.prestationRepo.delete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException('Prestation not found');
    }
  }
}
