require('dotenv').config();
const mongoose = require('mongoose');
const Customer = require('./models/Customer');
const Room = require('./models/Room');
const Booking = require('./models/Booking');

// MongoDB Verbindung
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('🔥 MongoDB verbunden...'))
  .catch(err => console.error(err));

// Testkunden
const customers = [
  { name: 'Reem Alsheikha', email: 'reem@example.com', phone: '123456789', birthdate: '1999-05-04' },
  { name: 'Eman Alm', email: 'eman@example.com', phone: '987654321', birthdate: '1995-05-10' }
];

// Testräumee
const rooms = [
  { name: 'The Haunted House', difficulty: 'Hard', maxParticipants: 5, theme: 'Horror' },
  { name: 'Space Escape', difficulty: 'Medium', maxParticipants: 6, theme: 'Sci-Fi' }
];

async function seedDatabase() {
  try {
    await Customer.deleteMany();
    await Room.deleteMany();
    await Booking.deleteMany();

    console.log('🔥 Alte Daten gelöscht...');

    const insertedCustomers = await Customer.insertMany(customers);
    const insertedRooms = await Room.insertMany(rooms);

    console.log('✅ Testkunden & Testräume hinzugefügt!');

    // Testbuchung erstellen
    const bookings = [
      {
        customerId: insertedCustomers[0]._id,
        roomId: insertedRooms[0]._id,
        date: new Date('2025-04-01'),
        time: '18:00',
        status: 'gebucht'
      },
      {
        customerId: insertedCustomers[1]._id,
        roomId: insertedRooms[1]._id,
        date: new Date('2025-04-05'),
        time: '20:00',
        status: 'gebucht'
      }
    ];
    
    await Booking.insertMany(bookings);
    console.log('✅ Testbuchungen hinzugefügt!');

    mongoose.connection.close();
    console.log('🚀 Datenbank erfolgreich gefüllt! Verbindung geschlossen.');
  } catch (error) {
    console.error('❌ Fehler beim Seed-Daten einfügen:', error);
    mongoose.connection.close();
  }
}

seedDatabase();
