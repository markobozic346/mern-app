import express from "express";
import mongooseModel from "../models/signUpModels";
import bcrypt from "bcrypt";

const router = express.Router();

type UserData = {
  email: string;
  username: string;
  password: string;
};
const securePassword = async (password: string) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securedPassword = await bcrypt.hash(password, saltPassword);
  return securedPassword;
};
router.post("/signup", async (req, res) => {
  //creating table model
  const saltPassword = await bcrypt.genSalt(10);
  const securedPassword = await bcrypt.hash(req.body.password, saltPassword);

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

type User = {
  [name: string]: string;
};
router.post("/login", (req, res) => {
  mongooseModel.findOne(req.body.username, (error: string, user: User) => {
    if (user) {
      res.send("user is found");
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        res.send(result);
      });
    } else {
      res.send("user not found");
    }
  });
});
export default router;
