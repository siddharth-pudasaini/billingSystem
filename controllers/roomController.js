const Room = require('../models/roomModel');

exports.addRoom = async (req, res) => {
    try {
        //Creating new room in the database
        const newRoom = await Room.create(req.body);
        return res.json({
            status: 'success',
            message: 'Room added successfully',
            data: newRoom,
        });
    } catch (error) {
        //Sending error that the room already exists
        return res.status(400).json({
            status: 'failed',
            message: 'Room already exists',
        });
    }
};

exports.addCustomerToRoom = async (room, invoiceNumber, customer) => {
    //Putting current user and current invoice information to room's database
    try {
        await Room.findOneAndUpdate(
            { roomNumber: room },
            {
                currentInvoice: invoiceNumber,
                currentCustomer: customer,
                vaccant: false,
            }
        );
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

exports.getRoomData = async (req, res) => {
    const roomDatas = await Room.find(req.query, { roomNumber: 1 });
    return res.json({
        status: 'success',
        data: roomDatas,
    });
};

exports.checkRoomStatus = async (roomNumber) => {
    const room = await Room.findOne({ roomNumber: roomNumber });
    if (!room) {
        return "Room doesn't exist";
    }
    if (!room.vaccant) {
        return 'Room is not vaccant';
    }
    return true;
};
