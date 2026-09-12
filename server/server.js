import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes.js';
import { generalLimiter } from './middleware/rateLimiter.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware: Helmet (SEC-02)
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' }
  })
);

// Explicitly disable X-Powered-By header
app.disable('x-powered-by');

// CORS Whitelisting Configuration (SEC-01)
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map((origin) => origin.trim())
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, uptime bots)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        process.env.NODE_ENV !== 'production' ||
        origin.endsWith('.vercel.app')
      ) {
        return callback(null, true);
      }
      return callback(new Error(`CORS policy blocked access from origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

// Body Parser with strict payload size limit (mitigate payload flooding)
app.use(express.json({ limit: '10kb' }));

// General Rate Limiter for root
app.use(generalLimiter);

// Mount API v1 Routes
app.use('/api/v1', apiRoutes);

// Root greeting endpoint
app.get('/', (req, res) => {
  res.json({
    name: "Jaydeep Jogdand's Developer Portfolio REST API",
    status: 'online',
    version: '2.1.0',
    endpoints: {
      health: '/api/v1/health',
      portfolio: '/api/v1/portfolio',
      contact: '/api/v1/contact',
      resume: '/api/v1/resume'
    }
  });
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Requested resource not found.'
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` Jaydeep Jogdand Portfolio API is running!`);
  console.log(` Port: ${PORT}`);
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(` Health endpoint: http://localhost:${PORT}/api/v1/health`);
  console.log(`====================================================`);
});

export default app;
