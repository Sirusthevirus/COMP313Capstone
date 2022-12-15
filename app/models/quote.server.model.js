const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

let QuoteSchema = mongoose.Schema({
    materials: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'materials'
    }],
    materialNumberOfUse: {
        type: Number
    },
    
    dryAndWet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dryAndWet'
    }],
    dryAndWetNumberOfUse: {
        type: Number
    },

    mechanical: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mechanical'
    }],
    mechanicalNumberOfUse: {
        type: Number
    },

    finish: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'finish'
    }],
    finishNumberOfUse: {
        type: Number
    },

    standard: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'standard'
    }],
    standardNumberOfUse: {
        type: Number
    },

    additional: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'additional'
    }],
    additionalNumberOfUse: {
        type: Number
    },

    assembly: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'assembly'
    }],
    assemblyNumberOfUse: {
        type: Number
    },

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
        type: String
    },
    revision: {
        type: String
    },
    panelSize: {
        type: String,
        enum: ["12x18", "18x24"]
    },
    technology: {
        type: String,
        enum: ["Rigid", "Flex", "Rigid-Flex"]
    },
    totalPrice: {
        type: Number
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

