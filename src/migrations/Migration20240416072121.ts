import { Migration } from '@mikro-orm/migrations';

export class Migration20240416072121 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("uid" serial primary key, "username" varchar(255) not null, "password" varchar(255) not null, "latest_login_at" varchar(255) not null, "deleted_at" timestamptz not null);',
    );
  }
}
