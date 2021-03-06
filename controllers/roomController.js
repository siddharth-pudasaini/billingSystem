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
        return res.json({
            status: 'failed',
            message: 'Room already exists',
        });
    }
};

exports.getRoomData = async (req, res) => {
    const roomDatas = await Room.find(req.query, { roomNumber: 1 });
    res.json({
        status: 'success',
        data: roomDatas,
    });
};
