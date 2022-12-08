const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

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
    },
    technology: {
        type: String,
        enum: ["Flex", "Rigid-Flex"]
    },
    dateCreated: {
        type: Date
    }
}, {
    collection: "quotes"
});

QuoteSchema.plugin(autoIncrement.plugin, {
    model: 'QuoteSchema',
    field: 'quoteNumber',
    startAt: 1,
    incrementBy: 1
});

module.exports.quotes = mongoose.model('quote', QuoteSchema);

