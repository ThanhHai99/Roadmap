let index = (req, res) => {
  (req.cookies.roadmap) ? console.log(req.cookies.email + "\n" + req.cookies.password) : console.log("Khong ton tai");
  return res.render("pages/home");
};

module.exports = {
  index
};
