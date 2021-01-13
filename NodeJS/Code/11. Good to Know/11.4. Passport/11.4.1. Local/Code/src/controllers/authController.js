import { validationResult } from "express-validator/check";
import { auth } from "./../services/index";

let index = (req, res) => {
  return res.render("auth/signIn/signIn");
}

let create = (req, res) => {
  return res.render("auth/signUp/signUp");
};

let store = async (req, res) => {
  const validatorErrors = validationResult(req);
  if(!validatorErrors.isEmpty()) {
    const errors = Object.values(validatorErrors.mapped());
    errors.forEach( item => {
      console.log(item);
    });
    return res.redirect("/signUp");
  }

  try {
    await auth.store(req.body.email, req.body.psw);
    return res.redirect("/signUp");
  } catch (error) {
    console.log(error);
    return res.redirect("/signUp");
  }
};

let show = (id) => {

};

let edit = (req, res) => {

};

let update = (req, res) => {

};

let destroy = (req, res) => {

};


module.exports = {
  index,
  create,
  store,
  show,
  edit,
  update,
  destroy
}