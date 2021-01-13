import { v4 as uuidv4 } from "uuid";

let index = (req, res) => {
  const data = "Data nè";
  res.render("auth/signIn/signIn", { data });
}

let create = (req, res) => {
  res.render("auth/signUp/signUp");
};

let store = async (req, res) => {
  res.cookie("token", uuidv4());
  return res.redirect("/");
};

let show = (id) => {

};

let edit = (req, res) => {

};

let update = (req, res) => {

};

let destroy = (req, res) => {
  res.clearCookie("token");
  return res.redirect("/signUp");
};

let check = (req, res) => {
  res.cookie("token", uuidv4());
  return res.redirect("/");
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