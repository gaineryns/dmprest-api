import { Transform } from 'class-transformer';
import User from 'src/users/models/users.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Prestataire from 'src/prestataire/models/prestataire.entity';

@Entity()
class Prestation {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public content: string;

  @Column()
  public title: string;

  // Ouvert/fermé/
  @Column({ default: false })
  public status: boolean;

  /*  @Column({ type: 'timestamp', default: Date.now() })
  createdAt: Date;

  @Column({ type: 'timestamp', default: Date.now() })
  UpdatedAt: Date;
*/

  @Column({ nullable: true })
  @Transform((value) => {
    if (value !== null) {
      return value;
    }
  })
  public category?: string;

  @ManyToOne(() => User, (author: User) => author.prestations)
  public author: User;

  @Column({ default: false })
  enable: boolean;

  @ManyToMany(
    () => Prestataire,
    (prestataire: Prestataire) => prestataire.prestationApply,
  )
  @JoinTable()
  public candidates: Prestataire[];

  @ManyToOne(
    () => Prestataire,
    (author: Prestataire) => author.prestationsSelected,
  )
  public selectedPrestataire: Prestataire;
}

export default Prestation;
