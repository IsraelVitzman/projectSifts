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
    add(@Body('shift') shifts: any) {
        return this.shiftsService.add(shifts)
    }

    @Get('/getAll')
    getAll() {
        return this.shiftsService.getAll()
    }

    @Roles(['comander'])
    @Delete('/delete/:id')
    deleteById(@Param('id') id: number) {
        return this.shiftsService.delete(id)
    }
}