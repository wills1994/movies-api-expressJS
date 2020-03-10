# MoviesAPI ExpressJS

Express.js es un framework para crear Web Apps, Web APIs o cualquier tipo de Web Services, es libre bajo la licencia MIT.


Commandos:

1. npm init
2. Añadir eslint 
3. Prettier: Prettier se encargá de que todos los desarrolladores a la hora de hacer commit de su código sea igual.
3. npm i express dotenv
4. npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier
5. npx mrm lint-staged : cada vez que se hace commit y se sube al repositorio, vamos a instalar un hook, esto se instala solo mediante un comando.

# MOCKS - DATOS AUTOMATICOS
https://mockaroo.com/

# GIT IGNORE
https://www.gitignore.io/

# BODY
Contiene los pares de llave-valor de los datos enviados en el cuerpo (body) del llamado (request). 
Es establecido cuando se usa algún “body-parser” middleware como body-parser y multer.


# PARAMS

si tenemos una ruta de la forma /user/:name <BR />
// GET /user/glrodasz <BR />
req.params.name; <BR /> 
=> "glrodasz"

# QUERY

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order;
// => "desc"

req.query.shoe.color;
// => "blue"

req.query.shoe.type;
// => "converse"

# REST 
REST (Representational State Transfer) es un estilo de arquitectura para construir web services.

# PETICIONES DE API

GET. Lectura de datos. <BR />
PUT. Reemplazar datos. <BR />
PATCH. Actualizar datos en un recurso específico. <BR />
POST. Creación de datos.<BR />
DELETE. Eliminación de datos.