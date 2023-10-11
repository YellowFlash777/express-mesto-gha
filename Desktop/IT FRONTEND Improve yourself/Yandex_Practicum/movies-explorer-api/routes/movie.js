const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlValidator = require('../utils/constants');
const {
  addMovie,
  getMovie,
  deleteMovie,
} = require('../controllers/movie');

// создание фильма
router.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().min(2).max(30).required(),
    director: Joi.string().min(2).max(30).required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    nameRU: Joi.string().min(2).max(30).required(),
    nameEN: Joi.string().min(2).max(30).required(),
    image: Joi.string().required().pattern(urlValidator),
    trailerLink: Joi.string().required().pattern(urlValidator),
    thumbnail: Joi.string().required().pattern(urlValidator),
    movieId: Joi.number().required(),
  }),
}), addMovie);

router.get('/', getMovie);

// удаление фильма
router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
}), deleteMovie);

module.exports = router;
