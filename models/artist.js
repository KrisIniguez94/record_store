// models/artist.js

const fs = require('fs');
const path = require('path');
const artistsPath = path.join(__dirname, '..', 'data', 'artists.json');

const readAll = () => {
  const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
  const artists = JSON.parse(artistsJSON);
  return artists;
}

const readIndividual = (id) => {
  const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
  const artists = JSON.parse(artistsJSON);
  const filteredArtists = artists.filter( artist => artist.id === id);
  const artist = filteredArtists[0];
  return artist;
}

const create = () => {}
const update = () => {}
const destroy = () => {}

module.exports = {
  readAll,
  readIndividual,
  create,
  update,
  destroy
};
