
 const notFound = (req, res, next) => {
    const error = new Error(`Route not found — ${req.originalUrl}`);
    res.status(404);
    next(error);
};

  const errorHandler = (err, req, res, next) => {
        const statusCode =
            err.statusCode ||
            (res.statusCode && res.statusCode !== 200 ? res.statusCode : 500);

        const isDev = process.env.NODE_ENV !== 'production';

        res.status(statusCode).json({
            success: false,
            message: err.message || 'Internal Server Error',
            ...(isDev && { stack: err.stack }),
        });
    };

module.exports = {
    notFound,
    errorHandler
};
