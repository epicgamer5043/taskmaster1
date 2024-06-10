const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    timestamp: { type: Number, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    key: { type: String, required: false }
});

module.exports = mongoose.model('Action', actionSchema);
