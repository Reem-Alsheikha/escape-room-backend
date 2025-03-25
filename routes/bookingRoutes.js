const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();
const mongoose = require('mongoose'); 


// Buchungen abrufen (GET)
router.get('/', async (req, res) => {
  try {
    console.log("Abrufen der Buchungen gestartet..."); // Debugging

    const bookings = await Booking.find().populate('customerId roomId');

    console.log("Buchungen aus MongoDB:", bookings); // Debugging

    if (!bookings || bookings.length === 0) {
      console.log("Keine Buchungen gefunden!");
      return res.status(404).json({ message: "Keine Buchungen gefunden" });
    }

    res.json(bookings);
  } catch (error) {
    console.error("Fehler beim Abrufen der Buchungen:", error);
    res.status(500).json({ message: "Fehler beim Abrufen der Buchungen", error });
  }
});




// Neue Buchung erstellen (POST)
router.post('/', async (req, res) => {
  try {
    console.log("Empfangene Buchungsdaten im Backend:", req.body); // Debugging

    // Sicherstellen, dass customerId und roomId als ObjectId gespeichert werden
    const customerObjectId = req.body.customerId ? new mongoose.Types.ObjectId(req.body.customerId) : null;
    const roomObjectId = req.body.roomId ? new mongoose.Types.ObjectId(req.body.roomId) : null;

    console.log("Verarbeitete Daten für MongoDB:", { customerObjectId, roomObjectId });

    const newBooking = new Booking({
      customerId: customerObjectId,
      roomId: roomObjectId,
      participants: req.body.participants,
      date: req.body.date,
      time: req.body.time,
      createdAt: new Date()
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Fehler beim Erstellen der Buchung:", error);
    res.status(500).json({ message: "Fehler beim Erstellen der Buchung", error });
  }
});



// Buchung löschen (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Buchung gelöscht!" });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Löschen der Buchung", error });
  }
});

module.exports = router;
