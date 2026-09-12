import express from 'express';
import {
  getHealth,
  getPortfolio,
  submitContact,
  getResume
} from '../controllers/portfolioController.js';
import {
  contactLimiter,
  portfolioLimiter,
  resumeLimiter
} from '../middleware/rateLimiter.js';
import { sanitizeContactInput } from '../middleware/sanitize.js';

const router = express.Router();

// Public Health Check & Keep-Alive Ping (FREE-01, FREE-02)
router.get('/health', getHealth);

// Public Structured Portfolio JSON (Rate limited: 60 req/min)
router.get('/portfolio', portfolioLimiter, getPortfolio);

// Recruiter Contact Form Dispatch (Rate limited: 3 req/10 min, sanitized)
router.post('/contact', contactLimiter, sanitizeContactInput, submitContact);

// Stream Resume PDF (Rate limited: 10 req/min)
router.get('/resume', resumeLimiter, getResume);

export default router;
