const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    nationality: {
        type: String,
        trim: true,
    },
    idType: {
        type: String,
        trim: true,
    },
    idNumber: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
    },
    emailAddress: {
        type: String,
    },
    noOfVehicles: {
        type: Number,
    },
    vehicleData: {
        type: Array,
        default: [],
    },
    checkInDate: {
        type: String,
    },
    checkOutDate: {
        type: String,
    },
    pastArrivals: {
        type: Number,
        default: 0,
    },
    pastInvoices: {
        type: Array,
        default: [],
    },
    assignedRoom: {
        type: String,
    },
    currentTotalSum: {
        type: Number,
        default: 0,
    },
    currentInvoice: {
        type: Number,
    },
});

customerSchema.pre('save', function (next) {
    this.checkInDate = new Date();
    next();
});

module.exports = mongoose.model('Customer', customerSchema);
