const mapAlbumsDBToModel = ({
  album_id,
  name,
  year,
}) => ({
  albumId: album_id,
  name,
  year,
});

const mapSongsDBToModel = ({
  song_id,
  title,
  year,
  performer,
  genre,
  duration,
  album_id,
}) => ({
  songId: song_id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
});

module.exports = { mapAlbumsDBToModel, mapSongsDBToModel };
