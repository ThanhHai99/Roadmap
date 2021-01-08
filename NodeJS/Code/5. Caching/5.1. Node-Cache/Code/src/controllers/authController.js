import NodeCache from "node-cache";
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

let index = (req, res) => {
  res.end("signIn page");
}

let create = (req, res) => {
  res.render("auth/signUp");
};

let store = async (req, res) => {
  try {
    console.log("controller");
    
    //save to Node Cache
    
    // Save a key
    // let dataObj = { email: req.body.email, password: req.body.psw };
    // await cache.set("data", dataObj, 10000);

    //Save multi keys
    let u1Obj = { email: req.body.email, password: req.body.psw };
    let u2Obj = { email: "kimngan@gmail.com", password: "kimngan" };
    let statusSave = await cache.mset([
      { key: "u1", val: u1Obj, ttl: 10000 },
      { key: "u2", val: u2Obj }
    ]);
    console.log("statusSave: " + statusSave);
    const u1 = await cache.get("u1");
    const u2 = await cache.get("u2");
    console.log("The account "+ u1.email +" has password: " + u1.password);
    console.log("The account "+ u2.email +" has password: " + u2.password);
    
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