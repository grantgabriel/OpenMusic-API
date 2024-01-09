const Joi = require('joi');

const SongPayloadSchema = Joi.object({
  songId: Joi.string().required(),
  title: Joi.string().required(),
  year: Joi.number().required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number().required(),
  albumId: Joi.string().required(),
});

module.exports = { SongPayloadSchema };
