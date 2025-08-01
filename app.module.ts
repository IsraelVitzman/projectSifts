import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/user.entity';
import { Shifts } from './shifts/shifts.entity';

import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shifts',
      entities: [User, Shifts],
      synchronize: true,
    }),

    UsersModule,
    ShiftsModule,
    AuthModule,
  ],
})
export class AppModule { }
