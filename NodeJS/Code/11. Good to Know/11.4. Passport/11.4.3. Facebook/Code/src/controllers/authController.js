let getSignIn = (req, res) => {
  return res.render("auth/signIn/signIn");
}

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

let getSignOut = (req, res) => {
  req.logout();
  return res.redirect("/signIn");
}

module.exports = {
  getSignIn,
  getSignOut,
  checkLoggedIn,
  checkLoggedOut
}