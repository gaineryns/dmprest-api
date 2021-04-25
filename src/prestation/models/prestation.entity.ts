import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Service from '../../service/models/service.entity';
import Category from '../../category/models/Category.entity';
import Prestataire from "../../prestataire/models/prestataire.entity";

@Entity()
class Prestation {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ nullable: true })
  public description: string;

  @Column({ unique: true })
  public name: string;

  @Column()
  public price: number;

  @ManyToOne(() => Category, (category: Category) => category.prestations)
  public category: Category;

  @ManyToOne(() => Prestataire, (prestataire: Prestataire) => prestataire.prestations)
  public prestataire: Prestataire;
}

export default Prestation;
