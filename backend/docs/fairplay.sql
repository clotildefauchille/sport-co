

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
    "city" TEXT NOT NULL DEFAULT '',
    "zip_code" TEXT NOT NULL DEFAULT '',
    "department" TEXT NOT NULL DEFAULT '',
    "region" TEXT NOT NULL DEFAULT '',
    "google_place_key" TEXT NOT NULL DEFAULT '',
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
    "address" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "zip_code" TEXT NOT NULL DEFAULT '',
    "department" TEXT NOT NULL DEFAULT '',
    "region" TEXT NOT NULL DEFAULT '',
    "google_place_key" TEXT NOT NULL DEFAULT '',
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "email" TEXT NOT NULL DEFAULT '',
    "pseudo" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "lastname" TEXT NOT NULL DEFAULT '',
    "firstname" TEXT NOT NULL DEFAULT '',
    "avatar" TEXT NOT NULL DEFAULT '',
    "reward_count" TEXT NOT NULL DEFAULT '',
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
    "illustration" TEXT NOT NULL DEFAULT '',
    "date" DATE,
    "time" TIME,
    "duration" TIME NOT NULL DEFAULT '01:00',
    "participant_count" INTEGER NOT NULL DEFAULT 0,
    "min_participant" INTEGER NOT NULL DEFAULT 0,
    "user_id" INTEGER NOT NULL REFERENCES "user"("id"),
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
('rando', 'rando'),
('basketball', 'basketball');

INSERT INTO "activity_place" ("address", "city", "zip_code", "department", "region", "google_place_key", "lat", "lng", "private", "indoor") VALUES
('38 Rue René Alazard', 'Bagnolet', '93170', 'Seine-Saint_Denis', 'Ile-de-France', 'ChIJX-N1XXNt5kcRZM_FklimsmQ', 48.87370931491529, 2.4195904982846748, true, true), 
('10 Place de la Comédie', 'Montpellier', '34000', 'Hérault', 'Occitanie','ChIJmwSMR6evthIReIYsyxaF9qs', 43.609406065437526, 3.879749211605195, false, false),
('Promenade du Peyrou', 'Montpellier', '34000', 'Hérault', 'Occitanie', 'ChIJtW9UagevthIRqBfgUffh-TQ', 43.61125, 3.8707581, true, true);

INSERT INTO "user_grade" ("name", "point") VALUES
('Novice', 0),
('Nice follower', 100),
('Perfect partner', 200),
('Just addict', 100),
('Fantastic leader', 5000);

INSERT INTO "user_place" ("address", "city", "zip_code", "department", "region", "google_place_key", "lat", "lng") VALUES
('25 Rue Gabriel Marie', 'Marseille', '13010','Provence-Alpes-Côte d''Azur', 'Bouches-du-Rhône', 'ChIJUWddC1G_yRIRrCeWrpgJsig', 43.28572709923827, 5.401447882759161),
('2-38 Rue des Pervenches', 'Montpellier', '34000', 'Hérault', 'Occitanie', 'Ei8yIFJ1ZSBkZXMgUGVydmVuY2hlcywgMzQwMDAgTW9udHBlbGxpZXIsIEZyYW5jZSJQEk4KNAoyCafStBi9r7YSEUaddh24ThFxGh4LEO7B7qEBGhQKEgnvrrIOm6-2EhHQ4oxpJIgHHAwQAioUChIJp9K0GL2vthIREdCGsK2HxIY', 43.599436353996595, 3.8843637994919),
('38 Rue René Alazard', 'Bagnolet', '93170', 'Seine-Saint_Denis', 'Ile-de-France', 'ChIJX-N1XXNt5kcRZM_FklimsmQ', 48.87370931491529, 2.4195904982846748), 
('10 Place de la Comédie', 'Montpellier', '34000', 'Hérault', 'Occitanie','ChIJmwSMR6evthIReIYsyxaF9qs', 43.609406065437526, 3.879749211605195),
('Promenade du Peyrou', 'Montpellier', '34000', 'Hérault', 'Occitanie', 'ChIJtW9UagevthIRqBfgUffh-TQ', 43.61125, 3.8707581);

INSERT INTO "user" ("email", "pseudo", "password", "firstname", "lastname", "avatar", "reward_count", "admin", "user_grade_id", "user_place_id") VALUES
('russobenjamin45@gmail.com', 'Benj', 'pass', 'Benjamin', 'Russo', 'https://cliniquecmi.com/wp-content/uploads/cmi-physiotherapie-sportive-opt.jpg', 10, false, 1, 1),
('clotildefauchille@gmail.com', 'Clo', 'pass', 'Clotilde', 'Fauchille', 'https://cliniquecmi.com/wp-content/uploads/cmi-physiotherapie-sportive-opt.jpg', 20, true, 4, 2),
('mairey.jeremy@hotmail.fr', 'Jerem', 'pass', 'Jeremy', 'Mairey', '', 200, true, 2, 3),
('couderc.boris@gmail.com', 'bo', 'pass', 'Boris', 'Couderc', '', 0, false, 3, 3);

INSERT INTO "activity_statut" ("name")
VALUES ('passed'), ('canceled'), ('ongoing');

INSERT INTO "activity" ("title", "description", "illustration", "date", "time", "duration", "participant_count", "min_participant", "user_id", "activity_place_id", "activity_status_id", "sport_id")
VALUES 
('foot énervé', 'partie de foot au stade des Guillants, mettez votre plus beau maillot', '', '01/05/2021', '18:00', '2:30', 2, 8, 3, 1, 3, 1), 
('Double tennis', 'on est chaud du revers', '', '07/05/2021', '14:30', '1:00', 1, 4, 2, 2, 3, 2);

INSERT INTO "message" ("comment", "user_id", "activity_id")
VALUES ('super cette partie, mais j''aurai pas dû manger un kebab juste avt', 1, 1),
('attend de voir mon smash', 2, 2),
('Vous voulez vous retrouver vers quelle heure ?', 2, 2);


COMMIT;