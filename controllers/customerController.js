const Customer = require('../models/customerModel');
const Invoice = require('../models/invoiceModel');
const Room = require('../models/roomModel');

const { addToInvoice } = require('./invoiceController');

exports.registerNewCustomer = async (req, res) => {
    try {
        //Check if the room is Vaccant
        const room = await Room.findOne({ roomNumber: req.body.assignedRoom });
        //Returning failed status if the room is not empty
        if (!room) {
            return res.json({
                status: 'failed',
                message: "Room doesn't exists",
            });
        }
        //If room is vaccant
        if (room.vaccant) {
            //Creating new customer in the database
            const newCustomer = await Customer.create(req.body);
            //Creating new invoice for the recently added customer
            const invoiceNumber = await addToInvoice(
                newCustomer._id,
                newCustomer.assignedRoom
            );
            //Assigning the current invoice number to customer database
            await Customer.findByIdAndUpdate(newCustomer._id, {
                currentInvoice: invoiceNumber,
            });
            //Putting current user and current invoice information to room's database
            await Room.findByIdAndUpdate(room._id, {
                currentInvoice: invoiceNumber,
                currentCustomer: newCustomer._id,
                vaccant: false,
            });
            //Returning the success response
            return res.json({
                status: 'success',
                room: newCustomer.assignedRoom,
            });
        }
        //If the room is not vaccant sending failed status
        return res.json({
            status: 'failed',
            message: 'Room is not vaccant',
        });
    } catch (error) {
        console.log(error);
    }
};
