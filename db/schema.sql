DROP DATABASE IF EXISTS corporation;

CREATE DATABASE corporation;
USE corporation;


CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary INTEGER
    department_id INTEGER,
);

CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
);

