const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  activated: {
    type: Boolean,
    required: true,
    default: false
  },
  phoneNumber: {
    type: String,
    required: true
  }
});
const users = mongoose.model("users", usersSchema);
module.exports = users;
