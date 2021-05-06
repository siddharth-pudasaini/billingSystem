const Customer = require('../models/customerModel');
const Invoice = require('../models/invoiceModel');
const Room = require('../models/roomModel');

const { addToInvoice } = require('./invoiceController');
const { addCustomerToRoom, checkRoomStatus } = require('./roomController');

exports.registerNewCustomer = async (req, res) => {
    try {
        const room = req.body.assignedRoom;
        //Check if the room is Vaccant or the room exists or not
        const roomStatus = await checkRoomStatus(room);

        //If the room is not vaccant sending failed status
        if (roomStatus === 'Room is not vaccant') {
            return res.status(400).json({
                status: 'failed',
                message: 'Room is not vaccant',
            });
        }

        //Returning failed status if the room doesnot exists
        if (roomStatus === "Room doesn't exist") {
            return res.status(400).json({
                status: 'failed',
                message: "Room doesn't exists",
            });
        }

        //---------If room is vaccant-------------------------
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
        await addCustomerToRoom(room, invoiceNumber, newCustomer._id);

        //Returning the success response
        return res.json({
            status: 'success',
            room: newCustomer.assignedRoom,
        });
    } catch (error) {
        console.error(error);
    }
};
