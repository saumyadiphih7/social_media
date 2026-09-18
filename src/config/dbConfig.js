import mongoose from "mongoose";
import { mongoDBURL }  from "./serverConfig.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoDBURL);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`error while connecting to database ${error.message}`);
  }
};

export default connectDB;
