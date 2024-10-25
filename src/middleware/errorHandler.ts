import logger from '../config/logger.js';

import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;
