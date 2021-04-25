import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Category from '../../category/models/Category.entity';
import Prestataire from '../../prestataire/models/prestataire.entity';

@Entity()
class Service {
  @PrimaryGeneratedColumn('uuid')
  public id: number;

  @Column({ unique: true })
  public name: string;

  @OneToMany(() => Category, (category: Category) => category.service)
  public Categories: Category[];

  @ManyToMany(
    () => Prestataire,
    (prestataire: Prestataire) => prestataire.services,
  )
  public prestataires: Prestataire[];
}

export default Service;
