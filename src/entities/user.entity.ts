import {
  BeforeCreate,
  BeforeUpdate,
  Entity,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryKey()
  uid: number;

  @Property({
    unique: true,
  })
  username: string;

  @Property()
  password: string;

  @Property({
    nullable: true,
  })
  latestLoginAt: string;

  @Property({
    nullable: true,
  })
  deletedAt: Date;

  @Property({ type: 'Date' })
  createdAt = new Date();

  @Property({ type: 'Date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @BeforeCreate()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  }
}
