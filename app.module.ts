import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/user.entity';
import { Shifts } from './shifts/shifts.entity';
import { Assignment } from './assignments/assignments.entity';

import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentModule } from './assignments/assignments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // אם יש סיסמה ב-XAMPP שים אותה כאן
      database: 'guard_db', // ודא שקיים במסד הנתונים ב-phpMyAdmin
      entities: [User, Shifts, Assignment],
      synchronize: true, // לשימוש רק בפיתוח. מייצר טבלאות אוטומטית.
    }),

    // מודולים מותאמים
    UsersModule,
    ShiftsModule,
    AssignmentModule,
  ],
})
export class AppModule { }
