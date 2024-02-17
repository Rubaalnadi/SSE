import winston from 'winston';

// Configure Winston logger
const logger = winston.createLogger({
    level: 'info', // Set log level
    format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp
        winston.format.colorize(), // Add colorize format
        winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        // Log to console
        new winston.transports.Console(),
        // Optionally, log to a file
        // new winston.transports.File({ filename: 'logfile.log' })
    ],
});

export default logger;
