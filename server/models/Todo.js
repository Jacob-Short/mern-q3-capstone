const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
  links: {
    type: [String],
    },
});

module.exports = Todo = mongoose.model("todo", TodoSchema);