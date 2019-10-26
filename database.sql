DROP TABLE IF EXISTS "log";

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
    "value" INTEGER
);

-- example data
INSERT INTO "plant_soil_moisture_data" (creation_date, plant, value)
VALUES
	(now(), 1, 100),
	(now(), 2, 75),
	(now(), 3, 25),
	(now(), 4, 50)
;
