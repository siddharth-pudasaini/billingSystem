const Invoice = require('../models/invoiceModel');
const InvoiceNumber = require('../models/invoiceNumber');

exports.addToInvoice = async (customerData, room) => {
    try {
        //Getting the invoice number from database
        const billNumber = await InvoiceNumber.findOne();
        //Creating new invoice
        const createdInvoice = await Invoice.create({
            customerData: `${customerData}`,
            room: `${room}`,
            invoiceNumber: billNumber.invoiceNumber,
        });
        //Increasing the invoice number's value to put in the next bill
        await InvoiceNumber.findByIdAndUpdate(billNumber._id, {
            $inc: { invoiceNumber: 1 },
        });
        //Returning the invoice number
        return createdInvoice.invoiceNumber;
    } catch (error) {
        console.log(error);
    }
};

exports.appendToInvoice = async (req, res) => {
    try {
    } catch (error) {}
};
