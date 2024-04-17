-- Create database
CREATE DATABASE nest-auth-firebase;

-- Connect to the database
\c nest-auth-firebase;

-- Create table
create table "user" ("uid" varchar(255) not null, "username" varchar(255) not null, "password" varchar(255) not null, "latest_login_at" varchar(255) null, "deleted_at" timestamptz null, "created_at" timestamptz not null, "updated_at" timestamptz not null, constraint "user_pkey" primary key ("uid"));
alter table "user" add constraint "user_username_unique" unique ("username");
