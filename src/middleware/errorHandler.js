import logger from '../config/logger.js';

const errorHandler = (err, req, res, next) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;
