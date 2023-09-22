const mongoose = require('mongoose');
const urlValidator = require('../utils/constants');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле не может быть пустым'],
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [30, 'Превышена максимальная длина поля - 30 символов'],
  },
  link: {
    type: String,
    required: [true, 'Поле не может быть пустым'],
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
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
