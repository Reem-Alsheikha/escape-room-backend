const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

//  Alle Buchungen abrufen (GET)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('customerId roomId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Abrufen der Buchungen", error });
  }
});

// 📌 Neue Buchung erstellen (POST)
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Erstellen der Buchung", error });
  }
});

// 📌 Buchung löschen (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Buchung gelöscht!" });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Löschen der Buchung", error });
  }
});

module.exports = router;
