import express from "express";
import User from "../models/User";
const router = express.Router();

router.post("/register", async function (req, res, next) {
  const { username, email, password } = {
    username: "something",
    email: "something@gmail.com",
    password: "something",
  };
  //req.body
  // creating new user in database
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
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
