import model1 from "./../models/model1";
import model2 from "./../models/model2";

let func1 = (req, res) => {
  return res.send("controller2-func1");
}

let func2 = (req, res) => {
  return res.send("controller2-func2");
}

module.exports = {
  func1,
  func2
}
