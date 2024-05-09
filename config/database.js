import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected...");
    return true;
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
