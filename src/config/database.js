import mongoose from 'mongoose';
import dotenv from 'dotenv';




//Environment Variables configuration
dotenv.config()

//MongoDB connection function
const connectDB = async () => {
  try {

    const connString = process.env.MONGO_URI; 
  
    console.log('Connecting to MongoDB..', connString);
    await mongoose.connect(connString);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
connectDB()
export default connectDB;


