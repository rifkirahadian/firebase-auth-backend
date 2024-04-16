import { MikroORM } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly orm: MikroORM,
    private readonly em: EntityManager,
  ) {}

  async create(payload: RegisterDto): Promise<User> {
    const user = new User();
    user.username = payload.username;
    user.password = payload.password;
    await this.em.persistAndFlush(user);
    return user;
  }
}
