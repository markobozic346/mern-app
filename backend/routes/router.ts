import express from "express";
import mongooseModel from "../models/signUpModels";

const router = express.Router();

type UserData = {
  email: string;
  username: string;
  password: string;
};

router.post("/signup", (req, res) => {
  const signupUser = new mongooseModel({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  signupUser
    .save()
    .then((data: UserData) => {
      res.json(data);
    })
    .catch((error: string) => {
      res.json(error);
    });
});

export default router;
