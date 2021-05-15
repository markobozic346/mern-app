import express from "express";
import mongooseModel from "../models/signUpModels";
import bcrypt from "bcrypt";

const router = express.Router();

type UserData = {
  email: string;
  username: string;
  password: string;
};

router.post("/signup", async (req, res) => {
  //hashing password
  const saltPassword = await bcrypt.genSalt(10);
  const securedPassword = await bcrypt.hash(req.body.password, saltPassword);
  //creating table model
  const signupUser = new mongooseModel({
    email: req.body.email,
    username: req.body.username,
    password: securedPassword,
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
