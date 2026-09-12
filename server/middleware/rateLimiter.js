import rateLimit from 'express-rate-limit';

// Strict rate limit for contact form submissions: 3 requests per 10 minutes (SEC-03)
export const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many contact requests from this IP. Please wait 10 minutes before submitting again.'
  }
});

// Rate limit for portfolio data requests: 60 req/min
export const portfolioLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Rate limit exceeded for portfolio data requests. Please try again shortly.'
  }
});

// Rate limit for resume streaming: 10 req/min
export const resumeLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Resume download limit reached. Please wait a moment before trying again.'
  }
});

// General fallback limiter
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false
});
