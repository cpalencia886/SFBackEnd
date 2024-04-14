const model = require('../model/model');
const Booking = require('../model/bookingModel');
const createRecord = require('./createRecord');



module.exports = {
    register : async function(req, res) {
        const { firstName, lastName, email, phone, address, space, duration, bookingDate, startTime, endTime } = req.body;

        const totalPrice = await model.calculatePrice(space, duration);
        
        let booking = await createRecord(Booking, 
            {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
            space: space,
            duration: duration,
            bookingDate: bookingDate,
            startTime: startTime,
            endTime: endTime,
            totalPrice: totalPrice
        });

        console.log(booking)

        res.send(booking)
    }
};
