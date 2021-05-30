import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  console.log("database connected");
};

export default connectDB;
