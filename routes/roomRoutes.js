const router = require('express').Router()

const {addRoom,getRoomData}=require('../controllers/roomController')

router.post('/addRoom', addRoom)

router.get('/getData',getRoomData)


module.exports = router