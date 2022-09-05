const { check } = require("express-validator");

module.exports = [
  check("first_name")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({
      min: 5,
    })
    .withMessage("Como mínimo 5 caracteres"),
  check("last_name")
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .bail()
    .isLength({
      min: 5,
    })
    .withMessage("Como mínimo 5 caracteres"),

  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .bail()
    .isEmail()
    .withMessage("De ser un email válido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .bail()
    .isLength({
      min: 5,
    })
    .withMessage("Como mínimo 5 caracteres"),
];
