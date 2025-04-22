const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    assetName: String,
    assignedTo: String
});

module.exports = mongoose.model('Asset', assetSchema);
