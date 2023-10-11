const NotFoundError = require('../errors/notFoundErr');
const ForbiddenError = require('../errors/forbiddenError');
const BadRequestError = require('../errors/badRequestErr');
const Movie = require('../models/movie');

module.exports.addMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    nameRU,
    nameEN,
    imgage,
    trailerLink,
    thumbnail,
    movieId,
  } = req.body;
  Movie
    .create({
      country,
      director,
      duration,
      year,
      description,
      nameRU,
      nameEN,
      imgage,
      trailerLink,
      thumbnail,
      movieId,
      owner: req.user._id,
    })
    .then((movie) => res.status(201).send({ data: movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(err.message));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .orFail(new NotFoundError('Фильм с данным ID не найден'))
    .then((movie) => {
      if (movie.owner.toString() !== req.user._id) {
        return next(new ForbiddenError('Невозможно удалить карточку другого пользователя'));
      }
      return Movie.deleteOne(movie)
        .then(() => res.send({ data: 'Карточка удалена' }));
    })
    .catch(next);
};

module.exports.getMovie = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movie) => res.send({ data: movie }))
    .catch(next);
};
