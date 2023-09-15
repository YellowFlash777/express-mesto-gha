const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Обязательное поле'],
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [30, 'Превышена максимальная длина поля - 30 символов'],
  },
  about: {
    type: String,
    required: [true, 'Обязательное поле'],
    minlength: [2, 'Минимум 2 символа'],
    maxlength: [30, 'Превышена максимальная длина поля - 30 символов'],
  },
  avatar: {
    type: String,
    required: [true, 'Обязательное поле'],
    validate: {
      validator(url) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(url);
      },
      message: 'Введите URL',
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
