import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    //dont return password back
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//runs before data is saved in db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //hashing password directly to input field
  const salt = await bcrypt.genSalt(10);
  const pass = this.get("password");
  this.set("password", bcrypt.hashSync(pass, salt));
  console.log(this);
  next();
});
const User = mongoose.model("User", userSchema);

export default User;
