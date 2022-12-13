DROP DATABASE IF EXISTS corporation;

--create a new database--
CREATE DATABASE corporation;

USE corporation;

--create the department table--
CREATE TABLE department(
    id INT AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- create the role table--
CREATE TABLE role(
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department_id
);

-- create the employee table --
CREATE TABLE employee(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY(manager_id) REFERENCES employees (id)
);

