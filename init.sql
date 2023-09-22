CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    state VARCHAR(20) NOT NULL default 'to_do',
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (email, password)
VALUES ('ejemplo@email.com', 'contraseña123');

INSERT INTO users (email, password)
VALUES ('otro@email.com', 'otracontraseña456');


-- Insertar una tarea con title, description, state y usuario_id
INSERT INTO tasks (title, description, state, user_id)
VALUES ('Completar informe', 'Completar el informe mensual de ventas', 'to_do', 1);

-- Insertar otra tarea
INSERT INTO tasks (title, description, state, user_id)
VALUES ('Revisar correos', 'Revisar y responder correos electrónicos', 'to_do', 2);

-- Insertar una tercera tarea
INSERT INTO tasks (title, description, state, user_id)
VALUES ('Preparar presentación', 'Preparar la presentación para la reunión de equipo', 'to_do', 1);