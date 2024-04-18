import { EntityManager } from '@mikro-orm/postgresql';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { RegisterDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly em: EntityManager) {}

  async create(payload: RegisterDto): Promise<User> {
    const user = new User();
    user.uid = payload.uid;
    user.username = payload.username;
    user.password = payload.password;
    await this.em.persistAndFlush(user);
    return user;
  }

  async getUser(uid: string): Promise<User> {
    const user = await this.em.findOne(User, { uid });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async updateLastLogin(user: User) {
    Object.assign(user, {
      latestLoginAt: new Date(),
    });

    await this.em.persistAndFlush(user);
  }
}
