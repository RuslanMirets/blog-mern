import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
  body("fullName", "Укажите имя").isLength({ min: 2 }),
  body("avatarUrl", "Неверная ссылка на аватарку").optional().isURL(),
];

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 6 символов").isLength({
    min: 6,
  }),
];

export const postCreateValidation = [
  body("title", "Введите заголовок статьи").isLength({ min: 3 }).isString(),
  body("text", "Введите текст статьи").isLength({ min: 3 }).isString(),
  body("tags", "Неверный формат тэгов").optional().isString(),
  body("imageUrl", "Неверная ссылка на изображение").optional().isString(),
];
