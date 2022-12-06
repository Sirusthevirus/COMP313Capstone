const Finish = require('mongoose').model('finish');

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
    var finish = new Finish (req.body);
    finish.save(function (err){
        if(err){
            return next(err);
        } else {
            console.log(req.body);
            res.json(finish);
        }
    });
};

//get all of the standards
exports.allFinishes = function (req, res, next) {
    Finish.find({}, function (err, finishes) {
        if (err) {
            return next(err);
        } else {
            res.json(finishes);
        }
    });
};

exports.finishesByID = function (req, res, next, id) {
    Finish.findById(id).populate().exec((err, finish) =>
    {
        if (err) return next(err);
        if (!finish) return next(new Error('Failed to load finishes process '
            + id));
        req.finish = finish;
        next();
        res.status(200).json(finish);
    });
};

exports.byId = function (req, res, next){
    res.status(200);
}

exports.delete = function(req, res){
    const finish =  req.finish;
    finish.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
}