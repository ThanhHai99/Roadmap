
let index = (req, res) => {
  let data = "Data nè";
  return res.render("auth/signIn/signIn", { data });
}

let create = (req, res) => {
  return res.render("auth/signUp/signUp");
};

let store = async (req, res) => {
  return res.redirect("/");
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