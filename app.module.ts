import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentModule } from './assignments/assignments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [AuthModule, UsersModule, ShiftsModule, AssignmentModule,
    TypeOrmModule.forRoot({
      host: "localhost",
      port: 3306,
      username: 'root',
      password: "",
      database: 'nest_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

    })],


})
export class AppModule { }
