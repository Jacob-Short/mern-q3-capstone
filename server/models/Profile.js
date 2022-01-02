const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  goals: {
  type: [String],
  required: true
  },
  bio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = UserProfile = mongoose.model("user-profile", UserProfileSchema);