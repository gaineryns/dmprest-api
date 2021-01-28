import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Prestataire from '../../prestataire/models/prestataire.entity';

@Entity()
class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @ManyToMany(
    () => Prestataire,
    (prestataire: Prestataire) => prestataire.categories,
  )
  public prestataires: Prestataire[];
}

export default Category;
