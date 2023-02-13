const mongoose = require('mongoose');
const subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

// Unknown
module.exports = mongoose.model('Subscriber', subscriberSchema);