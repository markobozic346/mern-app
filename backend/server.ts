import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import routerUrls from "./routes/router";
import cors from "cors";
dotenv.config();
const app = express();
//database connection
mongoose.connect(
  `${process.env.DATABASE_CONNECTION_STRING}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("database connection is success");
    }
  }
);
app.use(express.json());
app.use(cors());
//base path
app.use("/", routerUrls);
app.listen(4000, () => console.log("server is up and running on port 4000"));
