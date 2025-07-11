const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  idNumber: String,
  phoneNumber: String,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
