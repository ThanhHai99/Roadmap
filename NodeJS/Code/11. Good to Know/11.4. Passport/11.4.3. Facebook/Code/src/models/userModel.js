import mongoose from "mongoose";
import bcrypt from "bcrypt";

let Schema = mongoose.Schema;
let UserSchema = new Schema({
  username: String,
  local: {
    email: { type: String, trim: true },
    password: String,
    isActive: { type: Boolean, default: false },
		verifyToken: String
  },
  facebook: {
		uid: String,
		token: String,
		email: { type: String, trim: true }
	},
  password: String,
  createdAt: { type: Number, default: Date.now },
	updatedAt: { type: Number, default: null },
	deletedAt: { type: Number, default: null }
});

UserSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  findByEmail(email) {
    return this.find({
      $or:[
        {"local.email": email},
        {"google.email": email},
      ]}).exec();
  },

  findByGoogleUid(uid){
		return this.findOne({"google.uid": uid}).exec();
  },
  
  findByFacebookUid(uid){
		return this.findOne({"facebook.uid": uid}).exec();
	},

  findUserByIdForSessionToUse(id){
		return this.findById(id, {"local.password": 0}).exec();
	},
};

UserSchema.methods = {
  comparePassword(password){
		return bcrypt.compare(password, this.local.password);
	}
};

module.exports = mongoose.model("user", UserSchema);
