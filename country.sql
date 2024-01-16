CREATE TABLE Country (
    id SERIAL NOT NULL PRIMARY KEY , 
    capital VARCHAR(50) NOT NULL ,
    code VARCHAR(50) NOT NULL,
    continent VARCHAR(50) NOT NULL , 
    description VARCHAR(50) NOT NULL, 
    nationality VARCHAR(50));