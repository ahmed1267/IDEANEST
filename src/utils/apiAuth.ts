import { config } from 'dotenv';
config();

const validApiKeys = [process.env.MICROSERVICE_A_API_KEY, process.env.MICROSERVICE_B_API_KEY];

import { Request, Response, NextFunction } from 'express';

const authenticateApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'] as string;

  if (!apiKey || !validApiKeys.includes(apiKey)) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }

  next();
};

export default authenticateApiKey;
