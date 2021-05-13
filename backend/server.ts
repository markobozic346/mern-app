import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import endpointsConfig from "./endpoints.config";
dotenv.config();
const app = express();
mongoose.connect(endpointsConfig.DataBaseUrl, () => {
  console.log("database connection is success");
});
app.listen(4000, () => console.log("server is up and running on port 4000"));
