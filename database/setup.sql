-- Remove existing tables before rebuilding them
DROP TABLE IF EXISTS points_log;
DROP TABLE IF EXISTS people;

CREATE TABLE "points_log"(
    "id" INTEGER NOT NULL,
    "points_amount" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "person_id" INTEGER NOT NULL,
    "reason" TEXT NOT NULL
);
ALTER TABLE
    "points_log" ADD PRIMARY KEY("id");

CREATE TABLE "people"(
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NULL,
    "role" VARCHAR(255) NULL
);
ALTER TABLE
    "people" ADD PRIMARY KEY("id");
ALTER TABLE
    "points_log" ADD CONSTRAINT "points_log_person_id_foreign" FOREIGN KEY("person_id") REFERENCES "people"("id");