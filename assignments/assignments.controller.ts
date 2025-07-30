import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AssignmentService } from './assignments.service'

@Controller('/assignments')
export class AssignmentController {
    constructor(private assignmentService: AssignmentService) { }
    @Post('/add')
    add(@Body() body: any) {

        return this.assignmentService.AssignRoleToUser(body)
    }

    @Get('/getAll')
    getAll() {
        return this.assignmentService.getAll()
    }

    @Get('/getById/:name/:password')
    getById(@Param('name') name: string, @Param('password') password: string) {
        return this.assignmentService.getAssignmentByCredentials(name, password)
    }

}

