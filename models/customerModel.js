const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
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
        type: String
    },
    pastArrivals: {
        type: Number,
        default:0
    },
    pastInvoices: {
        type:Array,
        default:[]
    },
    assignedRoom: {
        type: Number,
        default:0
    },
    currentTotalSum: {
        type: Number,
        default:0
    },
    currentInvoice: {
        type: Number,
    }
})


module.exports=mongoose.model('Customer',customerSchema)