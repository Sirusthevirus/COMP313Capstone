const { mechanical } = require('../models/mechanical.server.model');

const Mechanical = require('mongoose').model('mechanical');

//adding Mechanical
exports.create = function (req, res, next){
    var mechanical = new Mechanical (req.body);
    mechanical.save(function (err){
        if(err){
            return next(err);
        } else {
            console.log(req.body);
            res.json(mechanical);
        }
    });
};

//get all Mechanicals
exports.allMechanicals = function (req, res, next){
    Mechanical.find({}, function (err, mechanicals){
        if(err){
            return next(err);
        } else {
            res.json(mechanicals)
        }
    });
};

//find by id
exports.mechanicalByID = function (req, res, next, id) {
    Mechanical.findById(id).populate().exec((err, mechanical) =>
    {
        if (err) return next(err);
        if(!mechanical) return next(new Error('Failed to load material '+ id));
        req.mechanical = mechanical;
        next();
        res.status(200).json(mechanical);
    });
};

//get by id
exports.byId = function (req, res, next){
    res.status(200);
};

//delete Mechanical
exports.delete = function (req,res) {
    const mechanical =  req.mechanical;
    mechanical.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
};