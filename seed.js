const mongoose = require('mongoose');
const Customer = require('./models/Customer');
const Room = require('./models/Room');
const Booking = require('./models/Booking').default;



mongoose.connect('mongodb+srv://reemalsheikha5:reem1999.@cluster0.dyr93.mongodb.net/escapeRoomDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB verbunden')).catch(err => console.error('MongoDB Fehler:', err));

async function seedData() {
  try {
    await Customer.deleteMany({});
    await Room.deleteMany({});
    await Booking.deleteMany({});

    const customers = await Customer.insertMany([
      { name: "Alice Johnson", email: "alice@example.com", phone: "1234567890" },
      { name: "Bob Miller", email: "bob@example.com", phone: "9876543210" }
    ]);

    const rooms = await Room.insertMany([
      { name: "Horror Escape", difficulty: "Hard", theme: "Horror", maxParticipants: 6 },
      { name: "Jungle Adventure", difficulty: "Medium", theme: "Adventure", maxParticipants: 4 }
    ]);

    await Booking.insertMany([
      { customerId: customers[0]._id, roomId: rooms[0]._id, participants: 2 , date: "2024-03-16", time: "14:00" },
      { customerId: customers[1]._id, roomId: rooms[1]._id, participants: 4, date: "2024-03-17",  time: "16:30" }
    ]);

    console.log(' Daten erfolgreich hinzugefügt!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Fehler beim Seeding:', err);
    mongoose.connection.close();
  }
}

seedData();
