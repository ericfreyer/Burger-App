
USE qu4w6656y7u23b3d;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);