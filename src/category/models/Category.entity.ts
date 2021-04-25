import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Service from '../../service/models/service.entity';
import Prestation from '../../prestation/models/prestation.entity';
import Prestataire from '../../prestataire/models/prestataire.entity';

@Entity()
class Category {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: true })
  public description: string;

  @Column({ unique: true })
  public name: string;

  @ManyToOne(() => Service, (service: Service) => service.Categories)
  public service: Service;

  @OneToMany(() => Prestation, (prestation: Prestation) => prestation.category)
  public prestations: Prestation[];

  @ManyToMany(
    () => Prestataire,
    (prestataire: Prestataire) => prestataire.categories,
  )
  public prestataires: Prestataire[];
}

export default Category;
