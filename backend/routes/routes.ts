import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  console.log("register route");
});

router.post("/login", (req, res) => {
  console.log("login route");
});
router.post("/forgotpassword", (req, res) => {
  console.log("forgot password route");
});
router.post("/resetpassword", (req, res) => {
  console.log("reset password route");
});

export default router;
