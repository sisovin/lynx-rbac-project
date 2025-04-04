import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: User): Promise<void> {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<void> {
    return this.usersService.removeUser(id);
  }
}
