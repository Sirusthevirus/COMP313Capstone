const mongoose = require('mongoose');
const saltRounds = 10;

const Schema = mongoose.Schema;

var QuoteSchema = new Schema({
    QuoteCode:{
        type: String,
        unique: true
    }
});

// Configure the 'QuoteSchema' to use getters and virtuals when transforming to JSON
EnrollmentSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

// Create the 'Quote' model out of the 'QuoteSchema'
mongoose.model('Quote', QuoteSchema);
