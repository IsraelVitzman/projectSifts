import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private user: Repository<User>,
        private jwtservice: JwtService

    ) { }

    async login(body: any) {
        const { name, password, role } = body
        const findUser = await this.user.findOne({ where: { name, password } })
        if (!findUser) {
            return ` not found ${name}${password}`;
        }
        const ploayd = { "name": name, "role": role };
        const token = await this.jwtservice.signAsync(ploayd)
        return {
            token: token
        }

    }
    

}





