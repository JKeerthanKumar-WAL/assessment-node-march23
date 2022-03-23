var mongoose = require("mongoose");
var HobbiesSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxLength: 50 },
  description: { type: String, required: true, minlength: 10, maxLength: 500 },
  date_of_creation: { type: Date },
});
module.exports = mongoose.model("Hobbies", HobbiesSchema);
