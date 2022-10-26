const mongoose = require('mongoose');

let QuoteSchema = mongoose.Schema({
    materials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'materials'
    }],
    dryAndWet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dryAndWet'
    }],
    mechanical: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mechanical'
    }],
    standard: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'standard'
    }],
    additional: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'additional'
    }],
    assembly: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assembly'
    }],
    exchangeRate: {
        type: Number
    },
    freight: {
        type: Number
    },
    numberOfLayers: {
        type: Number,
        default: 1
    },
    customer: {
        type: String
    },
    partNumber: {
        type: Number
    },
    revision: {
        type: Number
    },
    panelSize: {
        type: String,
        enum: ["12x18", "18x24"]
    }
}, {
    collection: "quotes"
});

module.exports.quotes = mongoose.model('quote', QuoteSchema);
