-- Create database
CREATE DATABASE "nest-auth-firebase";

-- Connect to the database
\c "nest-auth-firebase";

-- Create table
CREATE TABLE "user" (
  "uid" VARCHAR(255) NOT NULL,
  "username" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "latest_login_at" VARCHAR(255),
  "deleted_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL,
  "updated_at" TIMESTAMPTZ NOT NULL,
  CONSTRAINT "user_pkey" PRIMARY KEY ("uid")
);

ALTER TABLE "user" ADD CONSTRAINT "user_username_unique" UNIQUE ("username");
