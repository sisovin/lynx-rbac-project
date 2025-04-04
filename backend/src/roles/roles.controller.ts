import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './role.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async createRole(@Body() role: Role): Promise<Role> {
    return this.rolesService.createRole(role);
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Role> {
    return this.rolesService.findOne(id);
  }

  @Put(':id')
  async updateRole(@Param('id') id: string, @Body() role: Role): Promise<void> {
    return this.rolesService.updateRole(id, role);
  }

  @Delete(':id')
  async removeRole(@Param('id') id: string): Promise<void> {
    return this.rolesService.removeRole(id);
  }
}
