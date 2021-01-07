import { auth } from "./../services/index";

let index = (req, res) => {
  res.end("signIn page");
}

let create = (req, res) => {
  res.render("auth/signUp");
};

let store = async (req, res) => {
  try {
    console.log("controller");
    let status = await auth.store(req.body.email, req.body.psw);
    console.log("status: " + status);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.end();
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

let check = (req, res) => {
  res.end("signIn check");
};

module.exports = {
  index,
  create,
  store,
  show,
  edit,
  update,
  destroy,
  check
}