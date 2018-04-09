// controllers/artists.js

const artistModel = require('../models/artist');

const readAll = (request, response) => {
  const artists = artistModel.readAll();
  response.send(artists);
}

const readIndividual = (request, response) => {
  const artist = artistModel.readIndividual(request.params.id);
  response.send(artist);
}

const create = (request, response) => {
  response.send('Testing create.');
}

const update = (request, response) => {
  response.send('Testing update.');
}

const destroy = (request, response) => {
  response.send('Testing destroy.');
}

module.exports = {
  readAll,
  readIndividual,
  create,
  update,
  destroy
};
