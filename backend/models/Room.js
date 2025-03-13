const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true },
  maxParticipants: { type: Number, required: true },
  theme: { type: String, required: true }
});

module.exports = mongoose.model('Room', RoomSchema);
