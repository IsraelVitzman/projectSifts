import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shifts } from "../shifts/shifts.entity"
import { User } from "../users/user.entity";
import { Assignment } from "./assignments.entity";

@Injectable()
export class AssignmentService {
    constructor(
        @InjectRepository(User) private user: Repository<User>,
        @InjectRepository(Shifts) private shifts: Repository<Shifts>,
        @InjectRepository(Assignment) private assignment: Repository<Assignment>
    ) { }

    async AssignRoleToUser(body: any) {

        const { name, password, id, startTime, endTime, description } = body;
        const user = await this.user.findOne({ where: { name, password } });

        if (!user) {
            return `no found${name},${password}`
        }

        const shifts = await this.shifts.findOne({ where: { id } });
        if (!shifts) {
            return `no found${id}`
        }
        const cheakAssignment = await this.assignment.findOne({
            where: {
                user: {
                    name: user.name,
                    password: user.password
                },

                shifts: { id: shifts.id }
            },
            relations: ['user', 'shifts']
        })
        if (cheakAssignment) {
            return `the user or shifts to useed..`
        }

        const assignment = this.assignment.create({
            user,
            shifts,
            startTime,
            endTime,
            description
        });

        return await this.assignment.save(assignment);
    }

    async getUsersAndShifts() {
        const users = await this.user.find();
        const shifts = await this.shifts.find();
        return { users, shifts };
    }

    async getAssignmentByCredentials(name: string, password: string) {
        const user = await this.user.findOne({ where: { name, password } });

        if (!user) {
            return ` not found ${name}${password}`;
        }

        const assignment = await this.assignment.findOne({
            where: {
                user: {
                    id: user.id,
                },
            },
            relations: ['user', 'shifts'],
        });

        if (!assignment) {
            return `No assignment found for user: ${name}`;
        }

        return {
            userName: assignment.user.name,
            shiftStart: assignment.shifts.startTime,
            shiftEnd: assignment.shifts.endTime,
            roleDescription: assignment.description,
        };
    }
    async getAll(){
        return this.assignment.find()
    }

}

