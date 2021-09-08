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
   	"paragraph_one" text,
   	"paragraph_two" text,
   	"user_id" INT REFERENCES "user"
);
    
UPDATE "user" 
SET "address" = 'sdfsdf' WHERE "id" = 1;