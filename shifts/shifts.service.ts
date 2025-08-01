import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shifts } from "./shifts.entity";
import { User } from "../users/user.entity";

@Injectable()
export class ShiftsService {
    constructor(
        @InjectRepository(Shifts)

        private shiftsRepository: Repository<Shifts>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async add(body: any) {
        const { name, password, startTime, endTime, description } = body
        const user = await this.userRepository.findOne({ where: { name, password } })

        if (!user) return `no found${name}${password}`


        const newShifts = this.shiftsRepository.create({ user: user, startTime, endTime, description })
        return await this.shiftsRepository.save(newShifts)
    }

    async getShiftByUserCredentials(name: string, password: string) {
        const user = await this.userRepository.findOne({
            where: { name, password },
        });

        if (!user) {
            return "no found"
        }

        return this.shiftsRepository.find({
            where: { user: { id: user.id } },
            relations: ['user'],
        });
    }
    async getAllShiftsWithUsers() {
        return this.shiftsRepository.find({
            relations: ['user'],
        });
    }


    async deleteByCredentials(name: string, password: string) {
        const user = await this.userRepository.findOne({ where: { name, password } });

        if (!user) {
            return 'User not found';
        }

        const deleted = await this.shiftsRepository.delete({ user: { id: user.id } });
        return `Deleted ${deleted.affected} shifts for user ${name}`;
    }


}

