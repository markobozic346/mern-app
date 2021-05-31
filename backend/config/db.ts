import mongoose from "mongoose";
import endpointsConfig from "../endpoints.config";
const connectDB = async () => {
  await mongoose.connect(endpointsConfig.dbConnect, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  console.log("database connected");
};

export default connectDB;
