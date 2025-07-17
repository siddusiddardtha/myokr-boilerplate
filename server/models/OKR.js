const mongoose = require('mongoose');

const okrSchema = new mongoose.Schema({
  objective: { type: String, required: true },
  keyResults: [{ type: String }],
  progress: { type: Number, default: 0 },
  team: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('OKR', okrSchema);
