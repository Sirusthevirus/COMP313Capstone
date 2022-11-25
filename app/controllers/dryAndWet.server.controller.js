const DryAndWet = require('mongoose').model('DryAndWet');

//adding dryAndWet
exports.create = function (req, res, next) {
    var dryAndWet = new DryAndWet (req.body);
    dryAndWet.save(function (err){
        if(err){
            return next(err);
        } 
        else {
            console.log(req.body);
            res.json(dryAndWet);
        }
    });
};

//get all dryAndWets
exports.allDryAndWets = function (req, res, next) {
    DryAndWet.find({}, function (err, dryAndWets) {
        if (err) {
            return next(err);
        } else {
            res.json(dryAndWets);
        }
    });
};
//findbyId
exports.dryAndWetByID = function (req, res, next, id) {
    DryAndWet.findById(id).populate().exec((err, dryAndWet) =>
    {
        if (err) return next(err);
        if(!dryAndWet) return next(new Error('Failed to load material '
        + id));
        req.dryAndWet = dryAndWet;
        next();
        res.status(200).json(dryAndWet);
    });
};
//get by id
exports.byId = function (req, res, next){
    res.status(200);
}

//delete dryandwet
exports.delete = function (req,res) {
    const dryandwet =  req.dryAndWet;
    dryandwet.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
}