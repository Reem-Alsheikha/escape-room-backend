const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

//  Alle Räume abrufen (GET)
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find(); // Alle Räume abrufen
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Abrufen der Räume", error });
  }
});

//  Neuen Raum erstellen (POST)
router.post('/', async (req, res) => {
  const newRoom = new Room(req.body);
  await newRoom.save();
  res.status(201).json(newRoom);
});

//  Raum löschen (DELETE)
router.delete('/:id', async (req, res) => {
  await Room.findByIdAndDelete(req.params.id);
  res.json({ message: "Raum gelöscht!" });
});

module.exports = router;
