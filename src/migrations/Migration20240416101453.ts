import { Migration } from '@mikro-orm/migrations';

export class Migration20240416101453 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("uid" serial primary key, "username" varchar(255) not null, "password" varchar(255) not null, "latest_login_at" varchar(255) null, "deleted_at" timestamptz null, "created_at" timestamptz not null, "updated_at" timestamptz not null);',
    );
    this.addSql(
      'alter table "user" add constraint "user_username_unique" unique ("username");',
    );
  }
}
