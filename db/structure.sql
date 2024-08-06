BEGIN;

DROP TABLE IF EXISTS "song" CASCADE;
DROP TABLE IF EXISTS "playlist" CASCADE;

CREATE TABLE "playlist" (
  "id" serial NOT NULL PRIMARY KEY,
  "name" varchar(255) NOT NULL
);

CREATE TABLE "song" (
  "id" serial NOT NULL PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "link" varchar(255) NOT NULL,
  "playlist_id" integer NOT NULL
);

COMMIT;