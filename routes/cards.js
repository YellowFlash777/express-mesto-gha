const router = require('express').Router();
const {
  addCard, getCards, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.post('/', addCard);
router.get('/', getCards);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
