const Assembly = require('mongoose').model('assembly');

// Add a assembly
exports.create = function (req, res, next){
    var assembly = new Assembly (req.body);
    assembly.save(function (err){
        if(err){
            return next(err);
        } else {
            console.log(req.body)
            res.json(assembly);
        }
    });
};
//Get all assembly
exports.allAssembly = function (req, res, next) {
    Assembly.find({}, function (err, asseblies) {
        if(err){
            return next(err);
        } else {
            res.json(asseblies);
        }
    });
};

//find by id
exports.assemblyByID = function (req, res, next, id) {
    Assembly.findById(id).populate().exec((err, assembly) =>
    {
        if (err) return next(err);
        if(!assembly) return next(new Error('Failed to load material '+ id));
        req.assembly = assembly;
        next();
        res.status(200).json(assembly);
    });
};

//get by id
exports.byId = function (req, res, next){
    res.status(200);
}

//Delete a assembly
exports.delete = function (req,res) {
    const assembly =  req.assembly;
    assembly.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
}