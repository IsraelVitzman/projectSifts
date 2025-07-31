import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity'; 

@Entity()
export class Shifts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column()
  description: string;

  @ManyToOne(() => User, user => user.shifts)
  user: User;
}
