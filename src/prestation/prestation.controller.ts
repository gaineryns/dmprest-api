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
import { PrestationService } from './prestation.service';
import { UpdatePrestationDto } from './dto/UpdatePrestationDto';
import { CreatePrestationDto } from './dto/CreatePrestationDto';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import { FindOneParams } from '../utils/findOneParams';

@Controller('prestation')
export class PrestationController {
  constructor(private readonly prestationService: PrestationService) {}

  @Get()
  getAllPrestations() {
    return this.prestationService.getAllPrestations();
  }

  @Get(':id')
  getPrestationById(@Param() { id }: FindOneParams) {
    return this.prestationService.getPrestationById(id);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createPrestation(@Body() prestation: CreatePrestationDto) {
    return this.prestationService.createPrestation(prestation);
  }

  @Put(':id')
  @UseGuards(JwtAuthenticationGuard)
  async replacePrestation(
    @Param('id') id: string,
    @Body() prestation: UpdatePrestationDto,
  ) {
    return this.prestationService.updatePrestation(id, prestation);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  async deletePrestation(@Param('id') id: string) {
    this.prestationService.deletePrestation(id);
  }
}
