import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shifts} from './shifts.entity';
@Module({
  imports: [
      TypeOrmModule.forFeature([Shifts])  // רק את זה
    ], 
  controllers: [ShiftsController],
  providers: [ShiftsService]
})
export class ShiftsModule { }
