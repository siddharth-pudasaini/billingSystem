const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true,
    },
    television: {
        type: Boolean,
        default: false,
    },
    ac: {
        type: Boolean,
        default: false,
    },
    hotWater: {
        type: Boolean,
        default: false,
    },
    attachedBathroom: {
        type: Boolean,
        default: false,
    },
    vaccant: {
        type: Boolean,
        default: true,
    },
    currentInvoice: {
        type: Number,
        default: null,
    },
    currentCustomer: {
        type: String,
        default: null,
    },
    pastInvoices: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model('Room', roomSchema);
