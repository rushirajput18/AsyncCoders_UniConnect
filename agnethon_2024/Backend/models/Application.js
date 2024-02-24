const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const ApplicationSchema = new Schema({
    committeeName: String,
    committeeSecretory: String,
    contactNumber: Number,
    email: String,
    eventDate: Date,
    eventTime: String,
    venue: String,
    message: String,
    status:{type: String}

}, {
    timestamps: true
});

const ApplicationModel = model('ApplicationScheme',ApplicationSchema);
module.exports = ApplicationModel;