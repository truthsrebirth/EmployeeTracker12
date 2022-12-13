
USE corporation;


INSERT INTO employee(id, first_name, last_name, roles_id, manager_id)
VALUES 
(1, 'Daniel', 'Jones', '1', '1'),
(2, 'Saqoun', 'Barkley', '2', '2'),
(3, 'Joe', 'Schoen' '3', '3')
(4, 'Brian', 'Daboll', '4', '4'),
(5, 'Adoree', 'Jackson', '5', '5'),


INSERT INTO department(department_name, role_id)
VALUES
('QB', '1'),
('RB', '2'),
('GM', '3'),
('HC', '4'),
('CB', '5'),

INSERT INTO roles(title, salary, department_id)
VALUES 
('Quarterback', 25000, 10),
('Running Back', 20000, 20),
('General Manager', 100000, 100),
('Head Coach', 10000, 200),
('Cornerback', 18000, 50),
