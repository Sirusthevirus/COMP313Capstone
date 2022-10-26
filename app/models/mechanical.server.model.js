const mongoose = require('mongoose');

let mechanical = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "mechanical"
});

module.exports.mechanical = mongoose.model('mechanical', mechanical);
