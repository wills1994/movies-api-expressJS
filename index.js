const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, 
  errorHandler,wrapErrors } = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler.js');
  
//por defecto express necesita parcear estos datos JSON
app.use(express.json());
moviesApi(app);
app.use(logErrors);
app.use(errorHandler);
app.use(wrapErrors);

// Catch 404
app.use(notFoundHandler);

app.listen(config.port, function() {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});