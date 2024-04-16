import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  uid: number;

  @Property()
  username: string;

  @Property()
  password: string;

  @Property()
  latestLoginAt: string;

  @Property()
  deletedAt: Date;
}
