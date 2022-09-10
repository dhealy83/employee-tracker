INSERT INTO department (name)
VALUES ("Sales"), ("Accounting"), ("Finance"), ("Legal"), ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("sales manager", 95000, 1), 
       ("sales person", 75000, 1), 
       ("accounting manager", 100000, 2),
       ("acconting person", 65000, 2),
       ("finance manager", 125000, 3),
       ("finance person", 80000, 3),
       ("legal manager", 140000, 4),
       ('legal person', 90000, 4),
       ("engineering manager", 165000, 5),
       ("engineering person", 115000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Healy", 1, NULL),
       ("Steven", "Smith", 2, 1),
       ("Ben", "Machok", 3, NULL),
       ("Tate", "Johnson", 4, 3),
       ("Laura", "Cole", 5, Null),
       ("Becca", "Stone", 6, 5),
       ("Charlie", "Pasture", 7, Null),
       ("Cole", "Weirhiem", 8, 7),
       ("Chris", "Moorita", 9, NULL),
       ("Chelse", "Myslik", 10, 9) ;


