import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import { Assignment } from '../assignments/assignments.entity'


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    password: string
    
    @Column()
    role: "soleger || comander"

    @OneToOne(() => Assignment, (asignments) => asignments.user)
    asignments: Assignment
}