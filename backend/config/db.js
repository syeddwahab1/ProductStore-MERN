import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected :${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1); //code 1 means exit with failiure ,0 means success
  }
};
