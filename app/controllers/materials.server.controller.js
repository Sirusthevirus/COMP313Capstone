const Material = require('mongoose').model('Material');

//add material

exports.create = function (req, res, next) {
    var material = new Material (req.body); // gets data from REACT
    material.save(function (err) {
        if(err){
            return next(err);
        }
        else {
            res.json(material);
        }
    });
};