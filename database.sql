DROP TABLE IF EXISTS "log";
DROP TABLE IF EXISTS "plant_soil_moisture_data";

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

-- example data
INSERT INTO "plant_soil_moisture_data" (creation_date, plant, moisture_value)
VALUES
	(now(), 1, 100),
	(now(), 2, 75),
	(now(), 3, 25),
	(now(), 4, 50)
;
INSERT INTO "plant_soil_moisture_data" (creation_date, plant, moisture_value)
        VALUES
          (now(), 1, 1),
          (now(), 2, 2),
          (now(), 3, 3),
          (now(), 4, 4)
        ;