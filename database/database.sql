Create database admin_almacen_taza;
use admin_almacen_taza;
CREATE TABLE admin (
id INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
cantidad INT(50),
clase VARCHAR(180),
modelo VARCHAR(180),
material VARCHAR(180),
color VARCHAR(180),
altura_mm INT(50),
diasuperior_mm INT(50),
diainferior_mm INT(50),
capacidad_ml INT(50),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

DERCRIBE admin;


