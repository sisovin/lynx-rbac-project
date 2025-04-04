import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { Permission } from './permission.entity';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  async createPermission(@Body() permission: Permission): Promise<Permission> {
    return this.permissionsService.createPermission(permission);
  }

  @Get()
  async findAll(): Promise<Permission[]> {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Permission> {
    return this.permissionsService.findOne(id);
  }

  @Put(':id')
  async updatePermission(@Param('id') id: string, @Body() permission: Permission): Promise<void> {
    return this.permissionsService.updatePermission(id, permission);
  }

  @Delete(':id')
  async removePermission(@Param('id') id: string): Promise<void> {
    return this.permissionsService.removePermission(id);
  }
}
