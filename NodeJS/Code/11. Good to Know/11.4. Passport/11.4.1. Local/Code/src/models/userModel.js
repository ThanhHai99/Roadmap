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
    return this.findOne({"local.email": email}).exec();
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
