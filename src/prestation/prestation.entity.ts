import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Prestation')
class Prestation {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public content: string;

  @Column()
  public title: string;
}

export default Prestation;
