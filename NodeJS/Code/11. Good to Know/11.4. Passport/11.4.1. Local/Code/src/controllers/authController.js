import { validationResult } from "express-validator/check";
import { auth } from "./../services/index";

let getSignIn = (req, res) => {
  return res.render("auth/signIn/signIn");
}

let getSignUp = (req, res) => {
  return res.render("auth/signUp/signUp");
};

let postSignUp = async (req, res) => {
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

let getSignOut = (req, res) => {
  req.logout();
  return res.redirect("/signIn");
};

let checkLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
		return res.redirect("/signIn");
	}
	next();
};

let checkLoggedOut = (req, res, next) => {
  if (req.isAuthenticated()) {
		return res.redirect("/");
	}
	next();
}; 

module.exports = {
  getSignIn,
  getSignOut,
  getSignUp,
  postSignUp,
  checkLoggedIn,
  checkLoggedOut
}