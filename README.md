# ¡Bienvenido!

Este repositorio se encarga de contener el codigo de un API REST para la gestión de tareas.

## Funcionalidades:

**Autenticación**: Implementa un sistema básico de autenticación donde los usuarios puedan registrarse e iniciar sesión. 
**Gestión de Tareas:**  donde se puede realizar: 
-   Crear una nueva tarea con un título, descripción. (Por defecto con estado Por hacer)
-   Obtener todas las tareas.
-   Obtener tareas filtradas por estado.
-   Marcar una tarea como completada.

## Pasos para levantar la aplicación
1.  Si se tiene instalado GIT en el computador se puede bajar el proyecto usando el siguiente comando  `git clone https://github.com/chjuca/challenge.git`
2. Para la ejecucion del proyecto es necesario tener instalado `node.js` para comprobar si su computadora lo tiene instalado puede ejecutar `node -v` lo cual dara como salida la version que tiene instalada, si presenta un mensaje de error, puede instalarlo visitando el siguiente enlace [https://nodejs.org/es/download/](https://nodejs.org/es/download/ "https://nodejs.org/es/download/")
3. Se debe generar la base de datos para lo cual debemos tener instalado postgres en nuestro computador, y creamos una nueva base de datos, dentro del proyecto se encuentra un archivo llamado `init.sql` una vez dentro de la base de datos debemos ejecutarlo, esto nos permitira crear las tablas y registros de prueba.
4. Dentro del proyecto tammbien podemos encontrar el archivo `settings.ts` en donde declararemos las variables de entorno
```  
export  const  config  = {
	SECRET_KEY:  'challenge', << puede ser cualqueir palabra nos servira para el jwt
	POSTGRES_DB:  "challenge-back", << nombre de la base de datos creada en los pasos anteriores
	POSTGRES_USER:  "postgres",		<< ususario de la base de datos
	POSTGRES_PASS:  "postgres",		<< contraseña de la abse de datos
	POSTGRES_HOST:  "localhost",	<< mantenerlo igual en pruebas locales
}
```

5. Una vez instalado, de procede a reconstruir el archivo `./node_modules` de la siguiente manera:
		- En la carpeta raiz del proyecto ejecutamos el comando `npm install`
		- Cuando tengamos la carpeta `./node_modules` regresamos a la carpeta raiz usando el comando `cd ..`
6. Levantamos el proyecto de forma local ejecutando el comando `npm run start`
7. Se depe presentar en consola un mensaje con la URI donde levantamos el proyecto `http://localhost:5000/´

## Guia para el uso de endpoints:
A continucion detallo el uso correcto de los endpoints, en cada endpoint te dejare un ejemplo del body de la consuta en caso se necesite 
### Login

Permite obtener un token para la realizacion de las otra consultas (necesita body)
	**POST**: http://localhost:5000/api/login
```
{
	"email":"ejemplo@email.com",
	"password":"contraseña123"
}
```
### Crear Usuario
Permite crear un nuevo usuario (necesita body)
** POST**: http://localhost:5000/api/users
```
{
	"email":"ejemplo3@email.com",
	"password":"contraseña1263"
}
```
### Crear una nueva tarea con un título, descripción.
Permite crear una nueva tarea (user_id)  (necesita body)
**POST**: http://localhost:5000/api/tasks/<user_id>
```
{
	"title":"Nueva Tarea",
	"description":"Description nueva tarea"
	"user_id":"2"
}
```
### Obtener todas las tareas
Permite obtener todas las tareas guardadas en la base de datos
**GET**: http://localhost:5000/api/tasks/state
### Obtener tareas filtradas por estado.
Permite obtener las tareas guardadas en base filtradas por el estado  (necesita body)
```
{
	"state": 'to_do'  |  'in_progress'  |  'completed'
}
```
### Marcar una tarea como completada
Permite cambiar el estado de una tarea
**PUT**: http://localhost:5000/api/tasks/<task_id>
```
{
	"state":"to_do"
}
```

