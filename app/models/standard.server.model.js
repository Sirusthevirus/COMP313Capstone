const mongoose = require('mongoose');

let standard = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "standard"
});

module.exports.standard = mongoose.model('standard', standard);
