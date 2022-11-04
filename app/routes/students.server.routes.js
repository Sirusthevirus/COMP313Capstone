/*var students = require('../../app/controllers/students.server.controller');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.post('/', students.create);

    app.get("/students",students.requiredLogin,students.allUserList); //go to http://localhost:3000/students to see the list

    app.route('/students/:studentId')
    .get(students.read)

    app.param('studentId', students.studentByID);


    
    //authenticate student
    app.post('/signin', students.authenticate);
    app.get('/signout', students.signout);
    app.get('/read_cookie', students.isSignedIn);

    //path to a protected page
	app.get('/welcome',students.welcome); 
};  */