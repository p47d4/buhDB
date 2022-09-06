const mongoose = require("mongoose");

const BookingAppointmentScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: String,
    phone: String,
    time: String,
    comment: String,
    specialty: String,
    doctor: String,
  },
  {
    collection: "BookingAppointment",
  }
);

mongoose.model("BookingAppointment", BookingAppointmentScehma);
