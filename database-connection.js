const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', function () {
  console.log('connected to the db.')
})
