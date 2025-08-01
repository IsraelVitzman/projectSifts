import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shifts} from './shifts.entity';
import { User } from "../users/user.entity";
@Module({
  imports: [
      TypeOrmModule.forFeature([Shifts,User]) 
    ], 
  controllers: [ShiftsController],
  providers: [ShiftsService]
})
export class ShiftsModule { }
