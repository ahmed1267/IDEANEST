import mongoose from 'mongoose';
import dotenv from 'dotenv';




//Environment Variables configuration
dotenv.config()

//MongoDB connection function
const connectDB = async () => {
  try {

    const connString = process.env.MONGO_URI;

    console.log('Connecting to MongoDB..', connString);
    if (!connString) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }
    await mongoose.connect(connString);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
connectDB()
export default connectDB;


