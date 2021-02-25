const mongoose = require('mongoose')


const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required:true
    },
    facilities: {
        type: Array,
        default:[]
    },
    currentInvoice: {
        type: String,
        default:None
    },
    currentCustomer: {
        type: String,
        default:None
    },
    pastInvoices: {
        type: Array,
        default:[]
    }
})

module.exports=mongoose.model('Room',roomSchema)