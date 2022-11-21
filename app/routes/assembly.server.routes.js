var assembly = require('../../app/controllers/assembly.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/addAssembly', assembly.create);
    app.get("/Assemblies",assembly.allAssembly); 
    app.param('aId', assembly.assemblyByID);
    app.route('/AssemblyDelete/:aId')
        .delete(assembly.delete);
};  