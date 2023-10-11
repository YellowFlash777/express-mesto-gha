const mongoose = require('mongoose');
const urlValidator = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Обязательное поле'],
  },
  director: {
    type: String,
    required: [true, 'Обязательное поле'],
  },
  duration: {
    type: Number,
    required: [true, 'Обязательное поле'],
  },
  year: {
    type: String,
    required: [true, 'Обязательное поле'],
  },
  description: {
    type: String,
    required: [true, 'Обязательное поле'],
  },
  nameRU: {
    type: String,
    required: [true, 'Обязательное поле'],
  },
  nameEN: {
    type: String,
    required: [true, 'Обязательное поле'],
  },

  image: {
    type: String,
    required: [true, 'Обязательное поле'],
    validate: {
      validator(url) {
        return urlValidator.test(url);
      },
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Обязательное поле'],
    validate: {
      validator(url) {
        return urlValidator.test(url);
      },
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Обязательное поле'],
    validate: {
      validator(url) {
        return urlValidator.test(url);
      },
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Обязательное поле'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
