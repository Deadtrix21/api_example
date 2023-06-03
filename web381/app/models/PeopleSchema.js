const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    title: {
        type: String,
        enum: ['mr', 'ms', 'mrs', 'dr', 'sir'],
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;