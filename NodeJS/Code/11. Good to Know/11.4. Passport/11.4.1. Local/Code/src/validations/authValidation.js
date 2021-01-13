import { check } from "express-validator/check";

let signUp = [
  check("email", "Email incorrect")
    .isEmail()
    .trim(),
  check("psw", "Password invalid")
    .isLength({ min:8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
  check("psw-repeat", "Repeat password not match.")
    .custom((value, { req }) => {
      return value === req.body.psw;
    })
];

module.exports = {
  signUp
};
