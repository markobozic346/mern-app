import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  res.send("register");
});
router.post("/login", (req, res) => {
  res.send("login route");
});
router.post("/forgotpassword", (req, res) => {
  res.send("forgot password route");
});
router.post("/resetpassword", (req, res) => {
  res.send("reset password route");
});

export default router;
