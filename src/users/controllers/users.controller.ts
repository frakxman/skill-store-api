import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { CreateUserDTO, UpdateUserDTO } from '../dtos/users.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get('')
  getUsers() {
    return this.usersService.findAll();
  }

  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId);
  }

  @Get(':userId/orders')
  getOrders(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.getOrdersByUser(userId);
  }

  @Post('')
  createUser(@Body() payload: CreateUserDTO ) {
    return this.usersService.create(payload);
  }

  // @Patch(':userId')
  @Put(':userId')
  updateUser(@Param('userId', ParseIntPipe) userId: number, @Body() payload: UpdateUserDTO ) {
    return this.usersService.update(userId, payload);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.remove(userId);
  }
}
