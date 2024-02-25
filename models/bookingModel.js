import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    dateOfBooking: { type: String, required: true },
    customerMail: { type: String, required: true },
    postCode: { type: String, required: true },
    Destination: { type: String, required: true },
    Fare: { type: Number, required: true },
    bookingSubContract: { type: String },
    dateOfJourney: { type: String, required: true },
    Tele: { type: Number, required: true },
    placeOfCollection: { type: String, required: true },
    timeOfCollection: { type: String },
    driverId: { type: String, required: true },
    VRMNo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
