const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, required: true, default: "gebucht" }
});

module.exports = mongoose.model('Booking', BookingSchema);
