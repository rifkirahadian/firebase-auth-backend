import { Migration } from '@mikro-orm/migrations';

export class Migration20240417030206 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("uid" varchar(255) not null, "username" varchar(255) not null, "password" varchar(255) not null, "latest_login_at" varchar(255) null, "deleted_at" timestamptz null, "created_at" timestamptz not null, "updated_at" timestamptz not null, constraint "user_pkey" primary key ("uid"));',
    );
    this.addSql(
      'alter table "user" add constraint "user_username_unique" unique ("username");',
    );
  }
}
