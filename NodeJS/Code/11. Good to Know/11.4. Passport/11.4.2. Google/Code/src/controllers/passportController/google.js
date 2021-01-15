import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import UserModel from "./../../models/userModel";

let GoogleStratery = passportGoogle.Strategy;

let initPassportGoogle = () => {
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
    new GoogleStratery({
        clientID: process.env.GG_APP_ID,
        clientSecret: process.env.GG_APP_SECRET,
        callbackURL: process.env.GG_APP_CALLBACK_URL
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await UserModel.findByGoogleUid(profile.id);
          if (user) return done(null, user, console.log("Login success"));

          let newUserItem = {
            username: profile.displayName,
            local: { isActive: true },
            google: {
              uid: profile.id,
              token: accessToken,
              email: profile.emails[0].value
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

module.exports = initPassportGoogle;
