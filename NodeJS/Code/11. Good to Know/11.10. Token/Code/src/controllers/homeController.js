let index = (req, res) => {
  (req.cookies.token) ? console.log(req.cookies.token) : console.log("Khong ton tai");
  return res.render("pages/home");
};

module.exports = {
  index
};
