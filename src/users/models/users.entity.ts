import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Prestation from '../../category/models/Category.entity';
import Prestataire from '../../prestataire/models/prestataire.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  @Exclude()
  public password: string;

  @Column({ nullable: true })
  public street: string;

  @Column({ nullable: true })
  public city: string;

  @Column({ nullable: true })
  public country: string;

  @OneToOne(() => Prestataire, {
    eager: false,
    cascade: true,
  })
  @JoinColumn()
  public prestataire: Prestataire;
}

export default User;
