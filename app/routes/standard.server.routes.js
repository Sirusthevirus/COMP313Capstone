var standard = require('../../app/controllers/standards.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/addStandard', standard.create);
    app.get('/standard', standard.allQuotes);
    app.post('/deleteStandard/:_id').put(standard.delete)
    app.route('/standard/:_id').put(standard.update)
};  