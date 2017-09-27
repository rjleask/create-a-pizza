DROP DATABASE IF EXISTS pizzas_db;

CREATE DATABASE pizzas_db;
USE pizzas_db;
DROP TABLE IF EXISTS pizzaCreation;
CREATE TABLE pizzaCreation (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	pizza_name VARCHAR(50),
	toppings VARCHAR(50),
	devoured 	BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);