import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import { Assignment } from '../assignments/assignments.entity'

@Entity()
export class Shifts {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    startTime: string

    @Column()
    endTime: string

    @Column()
    description: string

    @OneToOne(() => Assignment, (asignments) => asignments.shifts)
    asignments: Assignment

}