import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shifts } from "./shifts.entity";

@Injectable()
export class ShiftsService {
    constructor(
        @InjectRepository(Shifts)
        private shiftsRepository: Repository<Shifts>,
    ) { }

    async add(shifts: any) {
        const newShifts = this.shiftsRepository.create(shifts)
        return await this.shiftsRepository.save(newShifts)
    }
    
    async getAll() {
        return await this.shiftsRepository.find()

    }

    async delete(id: number) {
        return this.shiftsRepository.delete({ id })
    }


}

