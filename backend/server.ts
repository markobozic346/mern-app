import dotenv from "dotenv";
dotenv.config({
  path: "./config.env",
});
import express from "express";
import routes from "./routes/routes";
import connectDB from "./config/db";

const db = connectDB();
const app = express();
app.use("/app", routes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
