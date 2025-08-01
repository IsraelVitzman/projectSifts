import { Controller, Post, Get, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { Jwt } from '../auth/aute.strategy'
import { Guard } from '../auth/aute.guard';
import { Roles } from '../auth/aute.role'

@Controller('/users')
@UseGuards(AuthGuard('jwt'), Guard)
export class UsersController {
    constructor(private usersService: UsersService) { }


    @Roles(['commander'])
    @Get('/getAll')
    getAll() {
        return this.usersService.getAllUsers()
    }

    @Roles(['solager', 'commander'])
    @Get('/getUserById/:name/:password')
    getById(@Param('name') name: string, @Param('password') password: string) {
        return this.usersService.getUserById(name, password)
    }

    @Roles(['commander'])
    @Delete('/delete/:name/:password')
    DeleteByID(@Param('name') name: string, @Param('password') password: string) {
        return this.usersService.delete(name, password)
    }
}
