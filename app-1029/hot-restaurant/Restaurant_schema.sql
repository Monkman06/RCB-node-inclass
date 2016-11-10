CREATE DATABASE hot_restaurantBD;

USE hot_restaurantBD;

CREATE TABLE Reservations(
 position INT (5) NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 phone_number VARCHAR(100) NOT NULL,
 email VARCHAR(100) NOT NULL,
 id INT NULL,
 
 PRIMARY KEY (position)
 );

CREATE TABLE Wait_List(
 position INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 phone_number INT(10) NOT NULL,
 email VARCHAR(100) NOT NULL,
 id INT (100) NULL,
 
 PRIMARY KEY (position)

);
