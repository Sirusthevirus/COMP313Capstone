var additionals = require('../controllers/additional.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.post('/addAdditionals', additionals.create);
    app.get('/Additionals', additionals.allAdditionals);
    app.param('aId', additionals.additionalByID);
    app.route('/AdditionalDelete/:aId')
        .delete(additionals.delete);
};