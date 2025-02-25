import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/constants.js";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "2h" });
  res.cookie("jwt", token, {
    httpOnly: true, //Security
    sameSite: "strict", //controls cross site cookie behaviour
    maxAge: 3600000, //Expiration Time in Mili-Sec 3600000 -> 1hr
  });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User alredy exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    if (user) {
      generateToken(user._id);
      res.status(201).json({ _id: user.id, name: user.name, role: user.role });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    console.error(error, error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
  } catch (error) {}
};
