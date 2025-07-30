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

    async addUser(user: any) {
        const newUser = this.userRepository.create(user)
        return await this.userRepository.save(newUser);
    }

    async getUserById(name: string, password: string) {
        return this.userRepository.findOneBy({ name, password })
    }

    async delete(name: string, password: string) {
        return this.userRepository.delete({ name, password })
    }


}
