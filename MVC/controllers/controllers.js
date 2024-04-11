const model = require('../model/model');

module.exports = {
    register: function(req, res) {
        const { firstName, lastName, email, phone, address, space, duration, bookingDate, startTime, endTime } = req.body;

        const totalPrice = model.calculatePrice(space, duration);

        res.json({
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
    }
};
