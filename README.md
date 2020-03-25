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

# MIDDELWARE
Un middleware es una pieza de software que está en medio de otras 2. Es decir, es porque nos ayuda a conectar otras piezas de software.

Para errores que se retornan desde funciones asíncronas invocadas desde un manejador de ruta o un middleware, es necesario pasar el error como argumento a la función next(), de esta manera Express capturará el error y lo procesará.

Ejemplo:
app.get("/", function(req, res, next) {
  fs.readFile("/file-does-not-exist", function(err, data) {
    if (err) {
      next(err); // Se debe pasar el error a Express.
    } else {
      res.send(data);
    }
  });
});

# Capa de validación de datos a travéz de un middleware

La capa de validación es necesaria porque cuando estamos consumiendo nuestros endpoints, los endpoints no saben que datos le estamos enviando. Entonces mediante este middleware podemos validar o podemos especificar unos schemas, de tal manera que podemos especificar que: la pelicula sea de tipo string, queremos que la numeración sea de tipo número, etc.

# ¿Qué es Join y Boom?
Join y Boom son tecnologías del ecositema de hapijs pero son tan buenas, que las vamos a integrar como middleware en nuestra aplicación de express.

Join: Object schema validation, es la librería que nos va a ayudar a validar los schemas.
<br /> 
Boom: HTPP-friendly error objects. Es un manjeador de errores de una manera mucho más comprensible.

# TESTING
npm i -D mocha supertest sinon proxyquire <br />

mocha: es quien nos ayuda a correr los test.<br />

supertest: es una utilidad que nos ayuda a levantar un servidor temporal. <br />

sinon es una utilidad que nos ayuda a hacer mocks para test. <br />

proxyquire: es una utilidad que nos ayuda a inyectar los mocks cuando requeramos los paquetes.