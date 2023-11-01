import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [UsersController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
