const router = require('express').Router()
const {registerNewCustomer} = require('../controllers/customerController')

router.post('/registerNewCustomer',registerNewCustomer)

module.exports=router