import mongoose from "mongoose";
const MONGO_URI: string =
  process.env.MONGO_URI || "mongodb://localhost:27017/netBuz";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export { connectDB};
