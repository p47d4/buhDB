const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    payment_reference: String,
    title: String,
    middle_name: String,
    gender: String,
    phone: String,
    alternate_phone: String,
    date_of_birth: String,
    blood_group: String,
    marital_status: String,
    religion: String,
    occupation: String,
    residential_address: String,
    nationality: String,
    state: String,
    lga: String,
    ward: String,
    nok_fullname: String,
    nok_phone: String,
    nok_relationship: String,
    zip: String,
    office_address: String,
    image: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
