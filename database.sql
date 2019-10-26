DROP TABLE IF EXISTS "log";
DROP TABLE IF EXISTS "plant_soil_moisture_data";
DROP TABLE IF EXISTS "plant_goal_moisture";

CREATE TABLE "log" (
    "id" SERIAL PRIMARY KEY,
    "creation_date" timestamp NOT NULL DEFAULT NOW(),
    "caller" VARCHAR(255),
    "message" VARCHAR(255),
    "called_with" VARCHAR(255)
);

CREATE TABLE "plant_soil_moisture_data" (
    "id" SERIAL PRIMARY KEY,
    "creation_date" timestamp NOT NULL DEFAULT NOW(),
    "plant" INTEGER,
    "moisture_value" INTEGER
);

CREATE TABLE "plant_goal_moisture" (
	"id" SERIAL PRIMARY KEY,
	"creation_date" timestamp NOT NULL DEFAULT NOW(),
	"plant" INTEGER,
	"goal_moisture" INTEGER
);

-- example data
INSERT INTO "plant_soil_moisture_data" (plant, moisture_value)
VALUES
    (1, 100),
    (2, 75),
    (3, 25),
    (4, 50)
;
INSERT INTO "plant_soil_moisture_data" (plant, moisture_value)
VALUES
	(1, 1),
	(2, 2),
	(3, 3),
	(4, 4)
;

INSERT INTO "plant_goal_moisture" ("plant", "goal_moisture")
VALUES
	(1, 1),
	(2, 2),
	(3, 30),
	(4, 40)
;


