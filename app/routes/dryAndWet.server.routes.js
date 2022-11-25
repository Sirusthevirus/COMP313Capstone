var dryAndWets = require('../controllers/dryAndWet.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.post('/addDryAndWets', dryAndWets.create);
    app.get('/DryAndWets', dryAndWets.allDryAndWets);
    app.param('dId', dryAndWets.dryAndWetByID);
    app.route('/DryAndWetsDelete/:dId')
        .delete(dryAndWets.delete);
    app.route('/DryAndWetsById/:dId')
        .get(dryAndWets.byId);
};