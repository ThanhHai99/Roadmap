import cache from "memory-cache";

let index = (req, res) => {
  res.end("signIn page");
}

let create = (req, res) => {
  res.render("auth/signUp");
};

let store = async (req, res) => {
  try {
    console.log("controller");
    
    //save to Memory Cache
    await cache.put(req.body.email, req.body.psw);
    const password = await cache.get(req.body.email);
    console.log("The account "+ req.body.email +" has password: " + password);
    
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