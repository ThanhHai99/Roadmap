let getHome = (req, res) => {
  console.log("=============================================");
  console.log(req.session);
  return res.render("pages/home");
};

module.exports = {
  getHome
};
