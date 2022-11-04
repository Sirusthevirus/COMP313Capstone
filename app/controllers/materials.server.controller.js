const Material = require('mongoose').model('Material');

//add material

exports.create = function (req, res, next) {
    var material = new Material (req.body); // gets data from REACT
    console.log("body: " +req.body.supplier)
    material.save(function (err) {
        if(err){
            return next(err);
        } 
        else {
            console.log(req.body);
            res.json(material);
        }
    });
};