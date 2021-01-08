import mongoose from "mongoose";

let Schema = mongoose.Schema;
let UserSchema = new Schema({
  username: String,
  password: String,
  createdAt: { type: Number, default: Date.now },
	updatedAt: { type: Number, default: null },
	deletedAt: { type: Number, default: null }
});

UserSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
  
};

UserSchema.methods = {

};

module.exports = mongoose.model("user", UserSchema);
