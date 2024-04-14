const model = require('../model/model');
const Booking = require('../model/bookingModel');
const createRecord = require('./createRecord');

function calculateTotalTime(startTime, endTime) {
    const start = new Date(`01/01/2000 ${startTime}`);
    const end = new Date(`01/01/2000 ${endTime}`);
    const totalTimeInMinutes = (end - start) / (1000 * 60);
    const hours = Math.floor(totalTimeInMinutes / 60);
    const minutes = totalTimeInMinutes % 60;

    let totalTime = '';
    if (hours > 0) {
        totalTime += `${hours} hour${hours > 1 ? 's' : ''}`;
    }
    if (minutes > 0) {
        totalTime += `${hours > 0 ? ' ' : ''}${minutes} min${minutes > 1 ? 's' : ''}`;
    }
    return totalTime;
}

function getTime(startTime, endTime) {
    let start = startTime.substring(0, 2);
    let end = endTime.substring(0, 2);
    return Number(end) - Number(start);
}

module.exports = {
    register : async function(req, res) {
        const { firstName, lastName, email, phone, address, space, duration, bookingDate, startTime, endTime } = req.body;
        let totalTime = calculateTotalTime(startTime, endTime);
        let time = getTime(startTime, endTime);
        const totalPrice = await model.calculatePrice(space, duration, time);
        
        
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
            totalTime: totalTime,
            totalPrice: totalPrice
        });

        console.log(booking)

        res.send(booking)
    }
};
