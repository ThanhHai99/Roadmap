import UserModel from "../models/userModel";

let index = () => {

}

let create = () => {
  
};

let store = (email, psw) => {
  return new Promise( async(resolve, reject) => {
    try {
      console.log("service");
      await UserModel.createNew({
        username: email,
        password: psw
      });
      resolve("Tao user thanh cong");
    } catch (error) {
      reject("Tao user that bai");
    }
  });
};

let show = (id) => {

};

let edit = () => {

};

let update = () => {

};

let destroy = () => {

};

let check = () => {
  
}

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
