const standard = require('mongoose').model('standard');

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
    const standard = req.standard;
    standard.name = req.body.name;
    standard.standardId = req.body.standardId;
    standard.price = req.body.price;

    //article.creator = req.bodwe nbey.username;
    console.log(req.body)
    //
    course.save((err) => {
        if (err) {
            console.log('error', getErrorMessage(err))

            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json({
                status: 1,
                course
            });
        }
    });
};

//get all of the standards
exports.allStandards = function (req, res, next) {
    standard.find({}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};


exports.delete = function(req, res){
    standard.deleteOne({_id: req._id});
}
