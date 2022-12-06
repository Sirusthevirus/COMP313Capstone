const mongoose = require('mongoose');

let finish = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    collection: "finish"
});

module.exports.finish = mongoose.model('finish', finish);
