 
BEGIN;

DROP TABLE IF EXISTS "user_has_activity", "user_has_sport", "user", "activity", "sport", "message", "user_place", "user_grade", "activity_statut", "activity_place";

CREATE TABLE "sport" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "icon" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "activity_place" (
    "id" SERIAL PRIMARY KEY,
    "address" TEXT NOT NULL DEFAULT '',
    "city" TEXT DEFAULT '',
    "zip_code" TEXT DEFAULT '',
    "department" TEXT DEFAULT '',
    "region" TEXT DEFAULT '',
    "google_place_key" TEXT DEFAULT '',
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "private" BOOLEAN DEFAULT 'false',
    "indoor" BOOLEAN DEFAULT 'false',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_grade" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "point" INTEGER DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_place" (
    "id" SERIAL PRIMARY KEY,
    "address" TEXT DEFAULT '',
    "city" TEXT DEFAULT '',
    "zip_code" TEXT DEFAULT '',
    "department" TEXT DEFAULT '',
    "region" TEXT DEFAULT '',
    "google_place_key" TEXT DEFAULT '',
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "email" TEXT NOT NULL DEFAULT '',
    "pseudo" TEXT DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "lastname" TEXT NOT NULL DEFAULT '',
    "firstname" TEXT NOT NULL DEFAULT '',
    "avatar" TEXT DEFAULT '',
    "reward_count" INTEGER DEFAULT 0,
    "admin" BOOLEAN DEFAULT 'false',
    "user_grade_id" INTEGER NOT NULL REFERENCES user_grade("id"),
    "user_place_id" INTEGER NOT NULL REFERENCES user_place("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "activity_statut" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "activity" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "illustration" TEXT DEFAULT '',
    "date" DATE,
    "time" TIME,
    "duration" TIME DEFAULT '01:00',
    "participant_count" INTEGER DEFAULT 0,
    "min_participant" INTEGER DEFAULT 0,
    "creator_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "activity_place_id" INTEGER NOT NULL REFERENCES activity_place("id"),
    "activity_status_id" INTEGER NOT NULL REFERENCES activity_statut("id"),
    "sport_id" INTEGER NOT NULL REFERENCES sport("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "message" (
    "id" SERIAL PRIMARY KEY,
    "comment" TEXT NOT NULL DEFAULT '',
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
    "activity_id" INTEGER NOT NULL REFERENCES activity("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user_has_sport" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"), 
  "sport_id" INTEGER NOT NULL REFERENCES sport("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "user_has_activity" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
  "activity_id" INTEGER NOT NULL REFERENCES activity("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO "sport" ("name", "icon") VALUES
('foot', 'foot'),
('tennis', 'tennis'),
('randonnee', 'randonnee'),
('yoga', 'yoga'),
('velo', 'velo'),
('footing', 'footing'),
('escalade', 'escalade'),
('basketball', 'basketball'),
('fitness', 'fitness');



INSERT INTO "user_grade" ("name", "point") VALUES
('Novice', 0),
('Nice follower', 100),
('Perfect partner', 200),
('Just addict', 500),
('Leader', 5000);



INSERT INTO "activity_statut" ("name")
VALUES ('passed'), ('canceled'), ('ongoing');



COMMIT;