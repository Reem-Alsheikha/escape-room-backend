require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Verbindung
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB verbunden"))
  .catch(err => console.error(err));

// Routen einbinden
const roomRoutes = require('./routes/roomRoutes');
app.use('/api/rooms', roomRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));



