import passport from "passport";
import passportFacebook from "passport-facebook";
import UserModel from "../../models/userModel";

let FacebookStratery = passportFacebook.Strategy;

let initPassportFacebook = () => {
  //Save userId to session
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let user = await UserModel.findUserByIdForSessionToUse(id);
      user = user.toObject();
      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  });

  passport.use(
    new FacebookStratery({
        clientID: process.env.FB_APP_ID,
        clientSecret: process.env.FB_APP_SECRET,
        callbackURL: process.env.FB_APP_CALLBACK_URL,
        // passReqToCallback: true,
        // profileFields: ["email", "displayName"]
      }, async (req, accessToken, refreshToken, profile, done) => {
        try {
          let user = await UserModel.findByFacebookUid(profile.id);
          if (user) return done(null, user, console.log("Login success"));
          let newUserItem = {
            username: profile.displayName,
            local: { isActive: true },
            facebook: {
              uid: profile.id,
              token: accessToken,
              // email: profile.emails[0].value || "hai@gmail.com"
            }
          };
          let newUser = await UserModel.createNew(newUserItem);
          return done(null, newUser, console.log("Login success"));
        } catch (error) {
          console.log(error);
          return done(null, false, console.log("Server error"));
        }
      }
    )
  );
};

module.exports = initPassportFacebook;
