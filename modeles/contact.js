const mongoose = require("mongoose");
const validator = require("validator")
//full name - email- number- bday
const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
    unique: true
  },
  phoneNumber: { type: Number, required: true },
  birthdate: { type: Number, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;