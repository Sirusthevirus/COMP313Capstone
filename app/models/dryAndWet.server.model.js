const mongoose = require('mongoose');

let dryAndWet = mongoose.Schema({
    name: {
        type: String
    },
    numberOfUse: {
        type: Number
    },
    price: {
        type: Number
    }
}, {
    collection: "dryAndWet"
});

module.exports.dryAndWet = mongoose.model('DryAndWet', dryAndWet);
