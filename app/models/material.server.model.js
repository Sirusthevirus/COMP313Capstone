const mongoose = require('mongoose');
const saltRounds = 10;
const Schema = mongoose.Schema;

var MaterialSchema = new Schema({

    materialType: {
        type: String,
        enum: ["Laminate Material","Cover Coat", "Stiffener", "3M Tapes"]
    },
    materialType:String,
    supplier: String,
    material: String,
    code: String,
    numberOfUse: Number,
    price: Number

});

//configure the 'MaterialSchema' to use getter and and virtuals when transforming to JSON

MaterialSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

//Create the  'Material' model out of the 'MaterialSchema'
mongoose.model('Material', MaterialSchema);