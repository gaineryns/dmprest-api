import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Prestataire from './models/prestataire.entity';
import { CreateCategoryDto } from '../category/dto/CreateCategoryDto';
import User from '../users/models/users.entity';
import { CreatePrestataireDto } from './dto/CreatePrestataireDto';
import Category from '../category/models/Category.entity';
import Service from '../service/models/service.entity';

@Injectable()
export class PrestataireService {
  constructor(
    @InjectRepository(Prestataire)
    private prestataireRepo: Repository<Prestataire>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
    @InjectRepository(Service)
    private serviceRepo: Repository<Service>,
  ) {}
  async getPrestataire() {
    return this.prestataireRepo.find();
  }

  async getPrestataireById(id: string) {
    const prestataire = await this.prestataireRepo.findOne(id, {
      relations: ['user'],
    });
    if (prestataire) return prestataire;
    throw new HttpException('prestataire not found', HttpStatus.NOT_FOUND);
  }
  async createPrestataire(
    id: string,
    prestataireDto: CreatePrestataireDto,
    services: string[],
  ) {
    try {
      const user = await this.userRepo.findOne(id);
      if (!user) {
        throw new HttpException('user not found', HttpStatus.NOT_FOUND);
      }
      const serviceList: Service[] = await this.serviceRepo.findByIds(services);
      const newPrestataire = await this.prestataireRepo.create({
        ...prestataireDto,
        services: serviceList,
        user: user,
      });
      await this.prestataireRepo.save(newPrestataire);
      return newPrestataire;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
