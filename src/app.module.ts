import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PrestataireModule } from './prestataire/prestataire.module';
import { ServiceModule } from './service/service.module';
import { PrestationService } from './prestation/prestation.service';
import { PrestationModule } from './prestation/prestation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    CategoryModule,
    UsersModule,
    AuthenticationModule,
    PrestataireModule,
    ServiceModule,
    PrestationModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrestationService],
})
export class AppModule {}
