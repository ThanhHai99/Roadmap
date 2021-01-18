import path from "path";

let getHome = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/master.html`));
};

module.exports = {
  getHome: getHome
};
