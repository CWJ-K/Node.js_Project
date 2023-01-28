const httpStatus = require('http-status-codes');


exports.responNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    //res.send(`${errorCode} | The page does not exist`);
    // res.sendFile(`./public/${errorCode}.html`, {
    //    root: './' 
    // });
};

exports.logErrors = (error, req, res, next) => {
    console.log(`here`)
    console.error(error.stack);
    next(error); // pass the error to the next middleware function: responInternalError
};

exports.responInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};