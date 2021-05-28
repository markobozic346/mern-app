import dotenv from "dotenv";
import express from "express";
import routes from "./routes/routes";
dotenv.config({
  path: "./config.env",
});

const app = express();
app.use("/", routes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
