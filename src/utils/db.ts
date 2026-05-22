import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI || '';

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB successfully');
  }
  catch (error: any) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
}
