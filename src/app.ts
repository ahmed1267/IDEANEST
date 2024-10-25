import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import authenticateApiKey from './middleware/auth';
import appError from './utils/appError'
import logger from './config/logger'
import './config/database.js'
import { healthRouter } from './routes/healthRoute';
import { genericRoute } from './routes/healthRoute';

// Initialize Express app
export const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/health', healthRouter);
app.use('/generic', genericRoute)
app.use(authenticateApiKey);  // Apply API key authentication middleware

// Logging middleware for incoming requests
app.use((req, res, next) => {
    logger.info(`Incoming request: ${req.method} ${req.url}`);
    next();
});


// Error Handling: Handle requests for undefined routes
app.all('*', (req, res, next) => {
    next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});


async function startApp() {
    try {
        const port = process.env.PORT || 3000;
        server.listen(port, () => {
            console.log(`Server is up on port ${port}`);
        });

    } catch (error) {
        console.error('Error starting RabbitMQ worker:', error);
    }
}
startApp();