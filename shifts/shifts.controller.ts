import { Controller, Post, Get, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ShiftsService } from './shifts.service'
import { Jwt } from '../auth/aute.strategy'
import { Guard } from '../auth/aute.guard';
import { Roles } from '../auth/aute.role'

@Controller('/shifts')
@UseGuards(Jwt, Guard)
export class ShiftsController {
    constructor(private shiftsService: ShiftsService) { }
    @Roles(['comander'])
    @Post('/add')
    add(@Body() body: any) {
        return this.shiftsService.add(body)
    }
    @Roles(['comander'])
    @Get('/getAll')
    getAll() {
        return this.shiftsService.getAllShiftsWithUsers()
    }

    @Get('/getById')
    getById(@Param('name') name: string, @Param('password') password: string) {
        return this.shiftsService.getShiftByUserCredentials(name, password)
    }

    @Roles(['comander'])
    @Delete('/delete/:id')
    deleteById(@Param('name') name: string, @Param('password') password: string) {
        return this.shiftsService.delete(name, password)
    }
}