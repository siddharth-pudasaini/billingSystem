const mongoose = require('mongoose')

const invoiceNumberSchema=new mongoose.Schema({
    invoiceNumber: {
        type: Number,
        default:1
        }
})

module.exports = mongoose.model('InvoiceNumber', invoiceNumberSchema)

