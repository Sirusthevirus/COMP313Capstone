var quote = require('../../app/controllers/quote.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/', quote.create);

    app.get("/quote",quote.requiredLogin,quote.allUserList); //go to http://localhost:3000/students to see the list

    app.route('/quote/:quoteId')
    .get(quote.read)

    app.param('quoteId', quote.quoteById);

    //path to a protected page
	app.get('/welcome',quote.welcome); 
};  