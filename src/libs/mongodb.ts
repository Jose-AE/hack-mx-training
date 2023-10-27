import mongoose, { Mongoose } from "mongoose";

export default async function ConnectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
}
