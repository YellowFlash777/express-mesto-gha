const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const signupRouter = require('./signup');
const signinRouter = require('./signin');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');

router.use('/signup', signupRouter);
router.use('/signin', signinRouter);
router.use(auth);
router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Пользователь с данным ID не найден'));
});

module.exports = router;
