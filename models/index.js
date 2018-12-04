const mongoose = require("mongoose");
require("mongoose-type-email");

let customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  city: String,
  state: String,
  zip: Number,
  email: mongoose.SchemaTypes.Email
});

module.exports = mongoose.model("Customer", customerSchema);
