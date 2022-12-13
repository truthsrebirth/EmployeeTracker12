USE corporation;

INSERT INTO employee(first_name, last_name, roles_id, manager_id)
VALUES 
('Daniel', 'Jones', 1, 1),
('Saqoun', 'Barkley', 2, 2),
('Joe', 'Schoen' 3, 3)
('Brian', 'Daboll', 4, 4),
('Adoree', 'Jackson', 5, 5),


INSERT INTO department(department_name)
VALUES
('QB'),
('RB'),
('GM'),
('HC'),
('CB'),

INSERT INTO roles(title, salary, department_id)
VALUES 
('Quarterback', 25000, 10),
('Running Back', 20000, 20),
('General Manager', 100000, 100),
('Head Coach', 10000, 200),
('Cornerback', 18000, 50),
