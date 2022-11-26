const Standard = require('mongoose').model('standard');

// Add a standard
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};
//

exports.create = function (req, res) {
    var standard = new Standard (req.body);
    standard.save(function (err){
        if(err){
            return next(err);
        } else {
            console.log(req.body);
            res.json(standard);
        }
    });
};

//get all of the standards
exports.allStandards = function (req, res, next) {
    Standard.find({}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};


exports.delete = function(req, res){
    const standard =  req.standard;
    standard.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
}

exports.standardByID = function (req, res, next, id) {
    Standard.findById(id).populate().exec((err, standard) =>
    {
        if (err) return next(err);
        if (!standard) return next(new Error('Failed to load standard process '
            + id));
        req.standard = standard;
        console.log('in standardByID:', req.standard)
        next();
        res.status(200).json(standard);
    });
};

exports.byId = function (req, res, next){
    res.status(200);
}