var standard = require('../../app/controllers/standards.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/addStandard', standard.create);
    app.get('/standard', standard.allStandards);
    app.post('/deleteStandard/:_id').put(standard.delete)
    app.param('sId', standard.standardByID);
    app.route('/standard/:sId')
        .put(standard.update)
        .delete(standard.delete)
    app.route("/standard/:sId")
        .get(standard.byId)
};  