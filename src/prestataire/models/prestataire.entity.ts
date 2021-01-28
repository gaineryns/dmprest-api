import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../../users/models/users.entity';
import Prestation from '../../prestation/models/prestation.entity';
import Category from '../../prestation/models/category.entity';

@Entity()
class Prestataire {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({ nullable: true })
  public presentation: string;

  @Column({ nullable: true })
  public formation: string;

  @OneToOne(() => User, (user: User) => user.prestataire)
  public user: User;

  @ManyToMany(
    () => Prestation,
    (prestation: Prestation) => prestation.candidates,
  )
  public prestationApply: Prestation[];

  @OneToMany(
    () => Prestation,
    (prestation: Prestation) => prestation.selectedPrestataire,
  )
  public prestationsSelected: Prestation;

  @ManyToMany(() => Category, (category: Category) => category.prestataires)
  public categories: Category[];
}
export default Prestataire;
