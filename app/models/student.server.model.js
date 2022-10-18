const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;


var StudentSchema = new Schema({
    studentNum: {
        type: String,
        unique: true,
        require: 'Student Number is required',
        trim: true
    },
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    phoneNum: Number, 
    email: {
        type: String,
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    password:{
        type: String,
		validate: [
			(password) => password && password.length > 6,
			'Password should be longer'
		]
    },
    program: String

});


StudentSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName){
    const splitName = fullName.split('');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Hash the password before saving it into DB
StudentSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
})

// Create an instance method for authenticating student
StudentSchema.methods.authenticate = function(password) {
	//compare the hashed password of the database 
	//with the hashed version of the password the student enters
	return this.password === bcrypt.hashSync(password, saltRounds);
};

// Configure the 'StudentSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
	getters: true,
	virtuals: true
});


// Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);

