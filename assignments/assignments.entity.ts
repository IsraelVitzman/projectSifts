import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from "../users/user.entity";
import { Shifts } from "../shifts/shifts.entity";
@Entity()
export class Assignment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    description: string;


    @OneToOne(() => User, user => user.asignments)
    @JoinColumn()
    user: User;

    @OneToOne(() => Shifts, (shifts) => shifts.asignments)
    @JoinColumn()
    shifts: Shifts;

}
