import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [EmployeeController],
  imports: [TypeOrmModule.forFeature([Employee, User])],
  providers: [EmployeeService],
})
export class EmployeeModule {}
