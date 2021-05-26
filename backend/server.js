import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./config.env",
});
const app = express();

const PORT = procces.env.PORT || 4000;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
