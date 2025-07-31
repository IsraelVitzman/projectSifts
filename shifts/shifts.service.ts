import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shifts } from "./shifts.entity";
import { User } from "../users/user.entity";
@Injectable()
export class ShiftsService {
    constructor(
        @InjectRepository(Shifts)
        @InjectRepository(User)
        private shiftsRepository: Repository<Shifts>,
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


    async delete(id: number) {
        return this.shiftsRepository.delete({ id })
    }


}

