const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: Number,
        default: 0,
    },
    room: {
        type: String,
        unique: true,
    },
    customerData: {
        type: String,
    },
    invoiceData: {
        type: Array,
        default: [],
    },
    totalAmount: {
        type: Number,
        default: 0,
    },
    vatIncluded: {
        type: Boolean,
        default: false,
    },
    paid: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Invoice', invoiceSchema);
