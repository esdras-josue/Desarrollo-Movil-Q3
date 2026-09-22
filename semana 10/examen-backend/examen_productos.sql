CREATE DATABASE examen_productos;

USE examen_productos;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    precio DECIMAL(10,2) NOT NULL,
    estado ENUM('Disponible', 'No disponible') NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    fotografia_url VARCHAR(255)
);

INSERT INTO productos
(nombre, descripcion, precio, estado, categoria, fotografia_url)
VALUES
(
    'Mouse Gamer',
    'Mouse RGB de 6 botones',
    450.00,
    'Disponible',
    'Tecnologia',
    'https://ejemplo.com/mouse.jpg'
),
(
    'Teclado Mecanico',
    'Teclado mecanico RGB',
    950.00,
    'Disponible',
    'Tecnologia',
    'https://ejemplo.com/teclado.jpg'
),
(
    'Audifonos',
    'Audifonos con microfono',
    700.00,
    'No disponible',
    'Audio',
    'https://ejemplo.com/audifonos.jpg'
);
