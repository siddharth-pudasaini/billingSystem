const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: Number,
        default:1
    },
    customerName: {
        type: String,
    },
    invoiceData: {
        type: Array,
        default: [{
            item: {
                type:String
            },
            quantity: {
                type:Number,
            },
            price: {
                type:Number
            },
            total: {
                type:Number
            }
        }]
    },
    totalAmount: {
        type: Number,
        default:0
    },
    vatIncluded: {
        type: Boolean,
        default:false
    },

})

module.exports=mongoose.model('Invoice',invoiceSchema)