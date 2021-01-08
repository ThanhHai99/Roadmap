import mongoose from "mongoose";

let Schema = mongoose.Schema;
let NewsSchema = new Schema({
  content: String,
  userID: String,
  createdAt: { type: Number, default: Date.now },
	updatedAt: { type: Number, default: null },
	deletedAt: { type: Number, default: null }
});

NewsSchema.statics = {

};

NewsSchema.methods = {

};

module.exports = mongoose.model("news", NewsSchema);
