var assembly = require('../../app/controllers/assembly.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/', assembly.create);

    app.get("/assembly",assembly.requiredLogin,assembly.allUserList); //go to http://localhost:3000/students to see the list

    app.route('/assembly/:assemblyId')
    .get(assembly.read)

    app.param('assemblyId', assembly.quoteById);

    //path to a protected page
	app.get('/welcome',assembly.welcome); 
};  