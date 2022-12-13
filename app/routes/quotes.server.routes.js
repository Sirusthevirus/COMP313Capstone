var quotes = require('../../app/controllers/quotes.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/addQuote', quotes.create);
    app.get('/quotes', quotes.allQuotes);
    app.post('/deleteQuote/:_id').put(quotes.delete)
    app.route('/quotes/:_id').put(quotes.update)
    app.param('qId', quotes.quoteByID);
    app.route("/quoteById/:qId").get(quotes.byId)
};  

