import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey()
  uid: string;

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
}
