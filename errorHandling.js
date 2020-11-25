exports.handle404s = (_, __, next) => {
    const error = {
        statusCode: "Could not find resource",
        status: "Not Found"
    };

    next(error);
};

exports.errorHandler = (error, _, res, next) => {
    res.status(error.statusCode || 500).json ({
        status: error.status || "failed",
        message: error.message,
        stack: error.stack,
        ...error
    });

    next();
};