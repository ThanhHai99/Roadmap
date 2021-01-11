import layout from "mustache-layout-s";

let index = async (req, res) => {
  try {
    let data = "Data nè";
    const html = await layout.build(
      { name: "pages/auth/signIn/signIn.html", data: { data } },
      { name: "layouts/auth/master.html" }
    );
    return res.send(html);
  } catch (error) {
    console.log(error);
    return res.end();
  }
}

let create = async (req, res) => {
  try {
    const html = await layout.build(
      { name: "pages/auth/signUp/signUp.html" },
      { name: "layouts/auth/master.html" }
    );
    return res.send(html);
  } catch (error) {
    console.log(error);
    return res.end();
  }
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