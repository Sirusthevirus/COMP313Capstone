const Material = require('mongoose').model('Material');


//adding materials
exports.create = function (req, res, next) {
    var material = new Material (req.body); // gets data from REACT
    console.log("body: " +req.body.supplier)
    material.save(function (err) {
        if(err){
            return next(err);
        } 
        else {
            console.log(req.body);
            res.json(material);
        }
    });
};

//get all of the materials
exports.allMaterials = function (req, res, next) {
    Material.find({}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};

//edit material's price

exports.update = function (req, res) {
    const material = req.material;
    material._id = req.material._id;
    material.materialType = req.material.materialType;
    material.supplier = req.material.supplier;
    material.material = req.material.material;
    material.code = req.material.code;
    material.numberOfUse = req.material.code;
    material.price = req.material.price;
    material.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(material);
        }
    });

};
