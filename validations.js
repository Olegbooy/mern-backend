import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Невірний формат пошти').isEmail(),
  body('password', 'Пароль повинен мати мінімум 5 символів').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат пошти').isEmail(),
  body('password', 'Пароль повинен мати мінімум 5 символів').isLength({ min: 5 }),
  body('fullName', 'Вкажіть імя').isLength({ min: 3 }),
  body('avatarUrl', 'Невірна силка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введіть заголовок статті').isLength({ min: 3 }).isString(),
  body('text', 'Введіть текст статті').isLength({ min: 3 }).isString(),
  body('tags', 'Нівірни формат тегів').optional().isString(),
  body('imageUrl', 'Невірна силка на зображення').optional().isString(),
];
