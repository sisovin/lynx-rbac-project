import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionsRepository: Repository<Permission>,
  ) {}

  async createPermission(permission: Permission): Promise<Permission> {
    return this.permissionsRepository.save(permission);
  }

  async findAll(): Promise<Permission[]> {
    return this.permissionsRepository.find();
  }

  async findOne(id: string): Promise<Permission> {
    return this.permissionsRepository.findOne(id);
  }

  async updatePermission(id: string, permission: Permission): Promise<void> {
    await this.permissionsRepository.update(id, permission);
  }

  async removePermission(id: string): Promise<void> {
    await this.permissionsRepository.delete(id);
  }
}
