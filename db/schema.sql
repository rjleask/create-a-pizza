
CREATE DATABASE pizzas_db;
USE pizzas_db;

CREATE TABLE pizzaCreation (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	pizza_name VARCHAR(50),
	toppings VARCHAR(50),
	devoured 	BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);