
let index = (req, res) => {
  const data = "Data nè";
  res.render("auth/signIn/signIn", { data });
}

let create = (req, res) => {
  res.render("auth/signUp/signUp");
};

let store = async (req, res) => {
  console.log("req.body.email: " + req.body.email);
  console.log("req.body.psw: " + req.body.psw);
  console.log("req.email: " + req.email);
  console.log("req.psw: " + req.psw);
  return res.redirect("/");
};

let show = (id) => {

};

let edit = (req, res) => {

};

let update = (req, res) => {

};

let destroy = (req, res) => {
  return res.redirect("/signUp");
};

let check = (req, res) => {
  console.log("req.body.email: " + req.body.email);
  console.log("req.body.psw: " + req.body.psw);
  console.log("req.email: " + req.email);
  console.log("req.psw: " + req.psw);
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