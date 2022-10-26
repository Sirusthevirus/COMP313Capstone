const mongoose = require('mongoose');

let dryAndWet = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "dryAndWet"
});

module.exports.dryAndWet = mongoose.model('dryAndWet', dryAndWet);
