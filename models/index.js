const mongoose = require("mongoose");

let customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  city: String,
  state: String,
  zip: String
});

module.exports = mongoose.model("Customer", customerSchema);
