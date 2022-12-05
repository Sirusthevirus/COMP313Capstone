const Finishes = require('mongoose').model('finishes');

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
    var finishes = new Finishes (req.body);
    finishes.save(function (err){
        if(err){
            return next(err);
        } else {
            console.log(req.body);
            res.json(finishes);
        }
    });
};

//get all of the standards
exports.allFinishes = function (req, res, next) {
    Finishes.find({}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};


exports.delete = function(req, res){
    const finishes =  req.finishes;
    finishes.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
}

exports.finishesByID = function (req, res, next, id) {
    Finishes.findById(id).populate().exec((err, finishes) =>
    {
        if (err) return next(err);
        if (!finishes) return next(new Error('Failed to load finishes process '
            + id));
        req.finishes = finishes;
        console.log('in finishesByID:', req.finishes)
        next();
        res.status(200).json(finishes);
    });
};

exports.byId = function (req, res, next){
    res.status(200);
}