const mongoose = require('mongoose');

let finishes = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "finishes"
});

module.exports.finishes = mongoose.model('finishes', finishes);
