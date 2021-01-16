import UserModel from "../models/userModel";

let signInGoogle = (username, uid, accessToken, email) => {
  return new Promise( async(resolve, reject) => {
    try {
      let user = await UserModel.findByGoogleUid(uid);
      if (user) {
        if (user.deleteAt != null) return reject("Account removed");
        if (!user.local.isActive) return reject("Account not active");
        return reject("Account in use");
      } else {
        let newUserItem = {
          username: username,
          local: { isActive: true },
          google: {
            uid: uid,
            token: accessToken,
            email: email
          }
        };
        await UserModel.createNew(newUserItem);
        return resolve("SignIn successful");
      }
    } catch (error) {
      return reject("SignIn failure");
    }
  });
}

module.exports = {
  signInGoogle
}
