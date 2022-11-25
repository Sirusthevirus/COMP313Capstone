var assembly = require('../../app/controllers/assembly.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/addAssembly', assembly.create);
    app.get("/Assemblies",assembly.allAssembly); 
    app.param('asId', assembly.assemblyByID);
    app.route('/AssemblyDelete/:asId')
      .delete(assembly.delete);
    app.route('/AssemblyById/:asId')
      .get(assembly.assemblyByID);
};  