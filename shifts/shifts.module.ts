import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shifts} from './shifts.entity';
import { User } from "../users/user.entity";
import {UsersModule }from'../users/users.module'
@Module({
  imports: [
      TypeOrmModule.forFeature([Shifts]),
      TypeOrmModule.forFeature([User]) 
    ], 
  controllers: [ShiftsController],
  providers: [ShiftsService ,UsersModule]
})
export class ShiftsModule { }
