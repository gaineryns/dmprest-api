import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../../users/models/users.entity';
import Prestation from '../../prestation/models/prestation.entity';
import Category from '../../category/models/Category.entity';
import Service from "../../service/models/service.entity";

@Entity()
class Prestataire {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({ nullable: true })
  public presentation: string;

  @Column({ default: false })
  public enabe: boolean;

  @Column({ nullable: true })
  public formation: string;

  @OneToOne(() => User, (user: User) => user.prestataire)
  public user: User;

  @OneToMany(
    () => Prestation,
    (prestation: Prestation) => prestation.prestataire,
  )
  public prestations: Prestation[];

  @ManyToMany(() => Category, (category: Category) => category.prestataires)
  @JoinTable()
  public categories: Category[];

  @ManyToMany(() => Service, (service: Service) => service.prestataires)
  @JoinTable()
  public services: Service[];
}
export default Prestataire;
