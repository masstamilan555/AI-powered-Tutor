import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    console.log("DB connecting")
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully")
  } catch (error) {
    console.log("Error connecting DB",error)
  }
};
