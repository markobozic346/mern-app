import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("send");
});

export default router;