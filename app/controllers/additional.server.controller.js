const Additional = require('mongoose').model('additional');

//adding Additional
exports.create = function (req, res, next){
    var additional =new Additional (req.body);
    additional.save(function (err){
        if(err){
            return next(err);
        } else {
            console.log(req.body)
            res.json(additional);
        }
    });
};

//get all Additionals
exports.allAdditionals = function (req, res, next) {
    Additional.find({}, function (err, additionals) {
        if(err){
            return next(err);
        } else {
            res.json(additionals);
        }
    });
};

//find by id
exports.additionalByID = function (req, res, next, id) {
    Additional.findById(id).populate().exec((err, additional) =>
    {
        if (err) return next(err);
        if(!additional) return next(new Error('Failed to load material '+ id));
        req.additional = additional;
        next();
        res.status(200).json(additional);
    });
};
//delete Additional
exports.delete = function (req,res) {
    const additional =  req.additional;
    additional.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
}