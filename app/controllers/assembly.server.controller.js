const Assembly = require('mongoose').model('Assembly');

// Add a assembly
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
    const assembly = new Assembly();
    //assembly.assemblyName = req.body.assemblyName;


    //article.creator = req.bodwe nbey.username;
    console.log(req.body)
    //
    assembly.save((err) => {
        if (err) {
            console.log('error', getErrorMessage(err))

            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json({
                status: 1,
                assembly
            });
        }
    });
};

// Add a assembly

//Get a assembly

//Get List of assembly

//Edit a assembly

//Delete a assembly
