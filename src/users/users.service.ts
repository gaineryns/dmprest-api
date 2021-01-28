import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './models/users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}
  async getByEmail(email: string) {
    const user = await this.usersRepo.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepo.create(userData);
    await this.usersRepo.save(newUser);
    return newUser;
  }

  async getById(id: string) {
    const user = await this.usersRepo.findOne(id);
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async updatedUserById(id: string, updatedUser: UpdateUserDto) {
    const user = await this.usersRepo.findOne(id);
    try {
      await this.usersRepo.update(id, {
        ...updatedUser,
      });
      return await this.usersRepo.findOne(id);
    } catch (error) {
      throw new NotFoundException(user);
    }
  }
}
