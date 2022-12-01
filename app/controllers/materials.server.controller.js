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
//'materialByID' controller method to find a material by its id
exports.materialByID = function (req, res, next, id) {
    Material.findById(id).populate().exec((err, material) =>
    {
        if (err) return next(err);
        if (!material) return next(new Error('Failed to load material '
            + id));
        req.material = material;
        console.log('in materialById:', req.material)
        next();
        res.status(200).json(material);
    });
};
//get material by material field
exports.materialByMaterial = function(req, res, next, materialType){
    Material.find({materialType: materialType},  function (err, material) {
        if (err) {
            return next(err);
        } else {
            res.json(material);
        }
    });
};
exports.read = function(req,res, next){
    res.json(req.material);
};

exports.byId = function (req, res, next){
    res.status(200);
}

//get all of the materials
exports.allMaterials = function (req, res, next) {
    Material.find({}, function (err, materials) {
        if (err) {
            return next(err);
        } else {
            res.json(materials);
        }
    });
};

//edit material's price
exports.update = function (req, res) {
    const material = req.material;
    material.materialType = req.body.materialType;
    material.supplier = req.body.supplier;
    material.material = req.body.material;
    material.cuWeight = req.body.cuWeight;
    material.thickness = req.body.thickness;
    material.modelNumber = req.body.modelNumber;
    material.price = req.body.price;
    console.log("material req: "+req.material);
    console.log("want to save material" + material.material);
    Material.updateOne({_id: material.id}, material).then(
        () => {
          res.status(200);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
    
};


//delete material
exports.delete = function (req, res) {
    const material = req.material;
    material.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200);
        }
    });
};

