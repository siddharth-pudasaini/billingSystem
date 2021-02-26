const Customer=require('../models/customerModel')


exports.registerNewCustomer = async (req, res) => {
    try {
        const newCustomer = await Customer.create(req.body)
        console.log(newCustomer)
        res.json({
            "status":"success"
        })
    } catch (error) {
        console.log(error)
    }
}

