const artistModel = require('../models/artist');

const readAll = (request, response) => {
  response.send('Testing readAll.');
}

const readIndividual = (request, response) => {
  response.send('Testing readIndividual.');
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
