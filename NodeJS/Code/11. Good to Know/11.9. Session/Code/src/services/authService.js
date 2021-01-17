import UserModel from "../models/userModel";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

let index = () => {

}

let create = () => {
  
};

let store = (email, psw) => {
  return new Promise( async(resolve, reject) => {
    try {
      const userByEmail = await UserModel.findByEmail(email);
      if (userByEmail) {
        if (userByEmail.deleteAt != null) return reject("Account removed");
        if (!userByEmail.local.isActive) return reject("Account not active");
        return reject("Account in use");
      }

      const saltRounds = 7;
      const salt = bcrypt.genSaltSync(saltRounds);
      const userItem = {
        username: email.split("@")[0],
        local: {
          email: email,
          password: bcrypt.hashSync(psw, salt),
          verifyToken: uuidv4()
        }
      };

      const user = await UserModel.createNew(userItem);
      
      //Send mail

      // create user successfully
      return resolve("");
    } catch (error) {
      // create user failure
      return reject("");
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
