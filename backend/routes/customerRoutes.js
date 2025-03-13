const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

//  Alle Kunden abrufen (GET)
router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

//  Neuen Kunden erstellen (POST)
router.post('/', async (req, res) => {
  const newCustomer = new Customer(req.body);
  await newCustomer.save();
  res.status(201).json(newCustomer);
});

//  Kunde löschen (DELETE)
router.delete('/:id', async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Kunde gelöscht!" });
});

module.exports = router;
