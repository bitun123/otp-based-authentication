

let rateLimit;
try {
    rateLimit = require('express-rate-limit');
} catch {
    console.warn('⚠️  express-rate-limit not installed — rate limiting disabled');
}

const noopMiddleware = (_req, _res, next) => next();

/**
 * General API limiter — 100 requests per 15 minutes per IP.
 */
const apiLimiter = rateLimit
    ? rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        standardHeaders: true,
        legacyHeaders: false,
        message: { success: false, message: 'Too many requests, please try again later.' },
    })
    : noopMiddleware;

/**
 * Auth limiter — stricter: 10 attempts per 15 minutes.
 * Protects login/register endpoints from brute-force.
 */
 const authLimiter = rateLimit
    ? rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 10,
        standardHeaders: true,
        legacyHeaders: false,
        message: { success: false, message: 'Too many login attempts, please try again in 15 minutes.' },
    })
    : noopMiddleware;


    module.exports= {
    apiLimiter,
    authLimiter
    }