var materials = require('../controllers/materials.server.controller');

var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/addMaterial', materials.create);
    app.get('/materials', materials.allMaterials);
    app.route('/materials/:_id')
        .put(materials.update)
};