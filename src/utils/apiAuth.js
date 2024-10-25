import { config } from 'dotenv';
config();

const validApiKeys = [process.env.MICROSERVICE_A_API_KEY, process.env.MICROSERVICE_B_API_KEY];

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || !validApiKeys.includes(apiKey)) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }

  next();
};

export default authenticateApiKey;
