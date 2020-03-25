// obtenemos el assert que es el que se encargá de verificar si es verdad o no nuestra
const assert = require('assert');
const proxyquire = require('proxyquire');
/*
proxyquire inyecta los mocks cuando se requieren los paquetes */
const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies.js');
const testServer = require('../utils/testServer');
// Describimos nuestros test con la palabra describe, esto es lo que va a imprimir la consola
describe('routes - movies', function() {
  const route = proxyquire('../routes/movies', {
      // La inclusión de esté servicio como está escrita allá, será remplazada por MoviesServicesMock
    '../services/movies': MoviesServiceMock
  });

  const request = testServer(route);
  describe('GET /movies', function() {
    it('should respond with status 200', function(done) {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with the list of movies', function(done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        });
        // si no lo pasamos el test nuca sabra cuando finaliza y le dara un timeout.
        done();
      });
    });
  });
});