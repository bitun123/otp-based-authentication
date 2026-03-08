/**
 * errorMiddleware — global Express error handler and 404 handler.
 * Must be registered as the last middleware in app.js.
 */

/**
 * notFound — catches requests that didn't match any route.
 */
 const notFound = (req, res, next) => {
    const error = new Error(`Route not found — ${req.originalUrl}`);
    res.status(404);
    next(error);
};

/**
 * errorHandler — centralized error formatter.
 * Reads err.statusCode (our convention) or res.statusCode.
 * In production, hides internal error details.
 */
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
