const mongoose = require('mongoose')

module.exports = mongoose.model('Theater', {
  theaterId: Number,
  location: {
    address: {
      street1: String,
      city: String,
      state: String,
      zipcode: String,
    },
    geo: {
      type: String,
      coordinates: [Number],
    },
  },
})
