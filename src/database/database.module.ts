import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Prestataire from 'src/prestataire/models/prestataire.entity';
import Category from 'src/prestation/models/category.entity';
import Prestation from 'src/prestation/models/prestation.entity';
import User from 'src/users/models/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [Prestation, User, Prestataire, Category],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
