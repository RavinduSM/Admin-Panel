import Booking from "../models/bookingModel.js";

export const addBooking = async (req, res, next) => {
  try {
    const booking = new Booking({
      dateOfBooking: req.body.dateOfBooking,
      customerMail: req.body.customerMail,
      postCode: req.body.postCode,
      Destination: req.body.Destination,
      Fare: req.body.Fare,
      bookingSubContract: req.body.bookingSubContract,
      dateOfJourney: req.body.dateOfJourney,
      Tele: req.body.Tele,
      placeOfCollection: req.body.placeOfCollection,
      timeOfCollection: req.body.timeOfCollection,
      driverId: req.body.driverId,
      VRMNo: req.body.VRMNo,
    });
    const createBooking = await booking.save();
    res.send({ message: "Booking added, driver: createBooking" });
  } catch (error) {
    next(error);
  }
};
