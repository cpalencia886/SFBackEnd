const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  space: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  startTime: {
    type: String
  },
  endTime: {
    type: String
  },
  totalTime: {
    type: String
  },
  totalPrice: {
    type: String,
    required: true
  }
}, 
{
    collection: 'Booking'
}
 );


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
