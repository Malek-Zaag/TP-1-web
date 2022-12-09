import { Cv } from '../../cv/entities/cv.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  designation: string;

  @ManyToMany(() => Cv, { cascade: true })
  @JoinTable({
    name: 'cvs_skills',
    joinColumn: { name: 'Skill', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'Cv', referencedColumnName: 'id' },
  })
  cv: Cv[];
}
