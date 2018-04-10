// models/song.js

const uuid = require('uuid/v1');
const fs = require('fs');
const path = require('path');
const songsPath = path.join(__dirname, '..', 'data', 'songs.json');
const artistsPath = path.join(__dirname, '..', 'data', 'artists.json');
const artistsJSON = fs.readFileSync(artistsPath, 'utf8');
const artists = JSON.parse(artistsJSON);
const songsJSON = fs.readFileSync(songsPath, 'utf8');
const songs = JSON.parse(songsJSON);

const readAll = (artist_id) => {
  const filteredArtists = artists.filter( artist => artist.id === artist_id);
  const artist = filteredArtists[0];
  const artistSongs = songs.filter( song => artist.song_ids.includes(song.id));
  return artistSongs;
}

const create = (artist_id, song) => {
  const artistIndex = artists.map( artist => artist.id).indexOf(artist_id);
  song.id = uuid();
  songs.push(song);
  artists[artistIndex].song_ids.push(song.id);
  fs.writeFileSync(artistsPath, JSON.stringify(artists));
  fs.writeFileSync(songsPath, JSON.stringify(songs));
  return song;
}

const update = (song_id, updates) => {
  let result;
  updatedSongs = songs.map( song =>  {
    if ( song.id === song_id ) {
      result = { ...song, ...updates }
      return result;
    } else {
      return song;
    }
  });
  fs.writeFileSync(songsPath, JSON.stringify(updatedSongs));
  return result;
}

const destroy = (song_id, artist_id) => {
  let result;
  const artistIndex = artists.map( artist => artist.id).indexOf(artist_id);
  const remainingSongIds = artists[artistIndex].song_ids.filter(id => id !== song_id);
  const remainingSongs = songs.filter(song => song.id !== song_id);
  artists[artistIndex].song_ids = remainingSongIds;
  fs.writeFileSync(artistsPath, JSON.stringify(artists));
  fs.writeFileSync(songsPath, JSON.stringify(remainingSongs));
  return song_id; // Should prob return the whole song object
}

module.exports = {
  readAll,
  create,
  update,
  destroy
};
