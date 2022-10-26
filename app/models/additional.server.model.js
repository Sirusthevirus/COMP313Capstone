const mongoose = require('mongoose');

let additional = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "additional"
});

module.exports.additional = mongoose.model('additional', additional);
