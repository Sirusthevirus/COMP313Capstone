var mechanicals = require('../controllers/mechanicals.server.controller');
var express = require ('express');
var router = express.Router();

module.exports = function(app) {
    app.post('/addMechanical', mechanicals.create);
    app.get('/mechanicals', mechanicals.allMechanicals);
    app.param('mecId', mechanicals.mechanicalByID);
    app.route('/mechanicalById/:mecId')
        .get(mechanicals.byId)
        .delete(mechanicals.delete);
};