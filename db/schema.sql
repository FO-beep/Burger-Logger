DROP DATABASE IF EXISTS burgers_db;


CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT (10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR (50) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP NOT NULL,
-- createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);

SELECT * FROM burgers;
