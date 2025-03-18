const errorHandler = (err, req, res, next) => {
    console.error(`❌ Error: ${err.message}`);

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    const error = new Error('User not found');

    res.status(404);
return next(error);


module.exports = errorHandler;}
