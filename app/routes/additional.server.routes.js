var additionals = require('../controllers/additional.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.post('/addAdditionals', additionals.create);
    app.get('/additionals', additionals.allAdditionals);
    app.param('aId', additionals.additionalByID);
    app.route('/additionalDelete/:aId')
        .delete(additionals.delete);
    
    app.route('/additionalById/:aId')
        .get(additionals.byId);
};