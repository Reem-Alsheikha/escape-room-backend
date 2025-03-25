const mongoose = require('mongoose'); 

const bookingSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  participants: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);

