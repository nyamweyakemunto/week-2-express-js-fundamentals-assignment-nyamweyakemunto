// middleware/logger.js

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.originalUrl;
    const timestamp = new Date().toISOString();
  
    console.log(`[${timestamp}] ${method} ${url}`);
  
    next(); // Move to the next middleware/route handler
  };
  
  module.exports = logger;
  