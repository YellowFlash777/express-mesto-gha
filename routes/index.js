const router = require('express').Router();
const usersRoute = require('./users');
const cardsRoute = require('./cards');
const signupRouter = require('./signup');
const signinRouter = require('./signin');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');

router.use('/signup', signupRouter);
router.use('/signin', signinRouter);
router.use(auth);
router.use('/cards', cardsRoute);
router.use('/users', usersRoute);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Пользователь с таким id не найден'));
});

module.exports = router;
