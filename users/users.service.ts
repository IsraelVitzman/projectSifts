import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async getAllUsers() {
        return this.userRepository.find()
    }


    async getUserById(name: string, password: string) {
        const user = await this.userRepository.findOneBy({ name, password });
        return user || null;
    }

    async delete(name: string, password: string) {
        return this.userRepository.delete({ name, password })
    }


}
