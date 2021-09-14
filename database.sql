CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "address" VARCHAR (255) NOT NULL,
    "phone_number" VARCHAR (15) NOT NULL 
);

        
CREATE TABLE "cover_letters" (
   	"id" SERIAL PRIMARY KEY,
   	"template_name" VARCHAR(35) NOT NULL,
   	"paragraph_one" text NOT NULL,
   	"paragraph_two" text NOT NULL,
	"paragraph_three" text,
   	"user_id" INT REFERENCES "user"
);

UPDATE "user" 
SET "address" = 'sdfsdf' WHERE "id" = 1;