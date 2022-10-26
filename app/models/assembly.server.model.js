const mongoose = require('mongoose');

let assembly = mongoose.Schema({
    type: {
        type: String
    },
    cost: {
        type: Number
    },
    margin: {
        type: Number
    },
    minutes: {
        type: Number
    },
    IORatio: {
        type: Number
    }
}, {
    collection: "assembly"
});

module.exports.assembly = mongoose.model('assembly', assembly);
