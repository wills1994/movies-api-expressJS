const express = require('express');
const morgan = require('morgan'); //Un logger de solicitudes HTTP para Node.js.
const path = require('path');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');//protegidos al establecer multiples encabezados http dentro de la aplicación
const cors = require('cors');
const slash = require('express-slash');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, 
  errorHandler,wrapErrors } = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler.js');
  
// Permitir solicitudes cruzadas
app.use(cors());
app.use(helmet());

//por defecto express necesita parcear estos datos JSON
app.use(express.json());
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(errorHandler);
app.use(wrapErrors);


// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

//Logger
app.use(morgan('combined', { stream: accessLogStream }))

// añadir el middleware de slash
app.use(slash());

app.listen(config.port, function() {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});
