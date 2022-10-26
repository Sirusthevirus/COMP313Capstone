const Quote = require('mongoose').model('Quote');

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
    const quote = new Quote();
    quote.quoteName = req.body.quoteName;
    quote.quoteId = req.body.quoteId;
    quote.quotePrice = req.body.quotePrice;
    quote.quoteDate = req.body.date;
    quote.creator = req.id; 
    quote.created = new Date();

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

// Add a Quote

//Get a Quote

//Get List of Quotes

//Edit a Quote

//Delete a Quote
