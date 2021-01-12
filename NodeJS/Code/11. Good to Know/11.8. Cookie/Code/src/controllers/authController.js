
let index = (req, res) => {
  const data = "Data nè";
  res.render("auth/signIn/signIn", { data });
}

let create = (req, res) => {
  res.render("auth/signUp/signUp");
};

let store = async (req, res) => {
  const dataSave = { 
    email: req.body.email,
    password: req.body.psw
  };
  res.cookie("roadmap", dataSave);
  return res.redirect("/");
};

let show = (id) => {

};

let edit = (req, res) => {

};

let update = (req, res) => {

};

let destroy = (req, res) => {
  res.clearCookie("roadmap");
  return res.redirect("/signUp");
};

let check = (req, res) => {
  const dataSave = { 
    email: req.body.email,
    password: req.body.psw
  };
  res.cookie("roadmap", dataSave);
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