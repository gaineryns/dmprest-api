import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import { PrestataireService } from './prestataire.service';
import { FindOneParams } from '../utils/findOneParams';
import { CreatePrestataireDto } from './dto/CreatePrestataireDto';
import JwtAuthenticationGuard from "../authentication/jwt-authentication.guard";

@Controller('prestataire')
export class PrestataireController {
  constructor(private readonly prestataireService: PrestataireService) {}

  @Get()
  getPrestatires() {
    return this.prestataireService.getPrestataire();
  }

  @Get(':id')
  getPrestataireById(@Param() { id }: FindOneParams) {
    return this.prestataireService.getPrestataireById(id);
  }
  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createCategory(
    @Param('id') id: string,
    @Body() prestataire: CreatePrestataireDto,
    @Body('services') services: string[],
  ) {
    return this.prestataireService.createPrestataire(id, prestataire, services);
  }

  /*
    @Put(':id')
    //@UseGuards(JwtAuthenticationGuard)
    async replaceCategory(
        @Param('id') id: string,
        @Body() category: UpdateCategoryDto,
    ) {
        return this.prestataireService.updateCategory(id, category);
    }

    @Delete(':id')
    //@UseGuards(JwtAuthenticationGuard)
    async deleteCategory(@Param('id') id: string) {
        await this.prestataireService.deleteCategory(id);
    }*/
}
