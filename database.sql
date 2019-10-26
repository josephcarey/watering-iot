DROP TABLE IF EXISTS "log";

CREATE TABLE "log" (
	"id" SERIAL PRIMARY KEY,
	"creation_date" timestamp NOT NULL DEFAULT NOW(),
    "caller" VARCHAR(255),
	"message" VARCHAR(255),
    "called_with" VARCHAR(255)
    
);