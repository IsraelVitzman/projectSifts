import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Shifts } from '../shifts/shifts.entity'; // או בהתאם למיקום בפועל

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => Shifts, shift => shift.user)
  shifts: Shifts[];
}
