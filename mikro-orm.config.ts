import { defineConfig } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from 'src/entities/user.entity';
import { config } from 'dotenv';
config();

export default defineConfig({
  // ...
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10),
  entities: [User],
  dbName: process.env.DB_NAME,
  driver: PostgreSqlDriver,
  extensions: [Migrator],
});
