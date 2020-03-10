const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

//por defecto express necesita parcear estos datos JSON
app.use(express.json());
moviesApi(app);

app.listen(config.port, function() {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});