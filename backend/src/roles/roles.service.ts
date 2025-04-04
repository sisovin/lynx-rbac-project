import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  async createRole(role: Role): Promise<Role> {
    return this.rolesRepository.save(role);
  }

  async findAll(): Promise<Role[]> {
    return this.rolesRepository.find();
  }

  async findOne(id: string): Promise<Role> {
    return this.rolesRepository.findOne(id);
  }

  async updateRole(id: string, role: Role): Promise<void> {
    await this.rolesRepository.update(id, role);
  }

  async removeRole(id: string): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}
