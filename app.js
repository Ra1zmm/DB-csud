const mongoose  = require("mongoose")
const {creatContact,searchContact,deleteContact,updateContact} = require("./Services/ContactService")
mongoose.connect("mongodb://localhost/mongoose_db");

// creatContact({
//     fullName: "John",
//     email: "jochn999doe@example.com",
//     phoneNumber: 1234567890,
//     birthdate: 19900101,
//   })

//searchContact("XXXXx")

//updateContact("XXXXx",{email:"Joe@mail.com"})

//deleteContactContact("XXXXx")
