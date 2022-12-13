const Quote = require('mongoose').model('quote');

// Add a Quote
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
    var quote = new Quote (req.body);

    //article.creator = req.bodwe nbey.username;
    console.log(req.body)
    //
    quote.save((err) => {
        if (err) {
            console.log('error', getErrorMessage(err))

            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json({
                status: 1,
                quote
            });
        }
    });
};

//get all of the quotes
exports.allQuotes = function (req, res, next) {
    Quote.find({}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};

//find individual quote


//edit quote's price

exports.update = function (req, res) {
    const quote = req.quote;
    quote._id = req.quote._id;
    quote.materials = req.quote.materials;
    quote.dryAndWet = req.quote.dryAndWet;
    quote.mechanical = req.quote.mechanical;
    quote.standard = req.quote.standard;
    quote.additional = req.quote.additional;
    quote.assembly = req.quote.assembly;
    quote.exchangeRate = req.quote.exchangeRate;
    quote.freight = req.quote.freight;
    quote.numberofLayers = req.quote.numberofLayers;
    quote.customer = req.quote.customer;
    quote.partNumber = req.quote.partNumber;
    quote.revision = req.quote.revision;
    quote.panelSize = req.quote.panelSize;
    quote.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(quote);
        }
    });
};

exports.delete = function(req, res){
    Quote.deleteOne({_id: req._id});
}

exports.quoteByID = function (req, res, next, id) {
    Quote.findById(id).populate().exec((err, quote) =>
    {
        if (err) return next(err);
        if (!quote) return next(new Error('Failed to load quote '
            + id));
        req.quote = quote;
        console.log('in quoteByID:', req.quote)
        next();
        res.status(200).json(quote);
    });
};

exports.byId = function (req, res, next){
    res.status(200);
}