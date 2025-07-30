import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from './assignments.entity';
import { User } from '../users/user.entity';
import { Shifts } from '../shifts/shifts.entity';

import { AssignmentService } from './assignments.service';
import { AssignmentController } from './assignments.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Assignment, User, Shifts]),
  ],
  providers: [AssignmentService],
  controllers: [AssignmentController],
})
export class AssignmentModule {}
