import User from "../models/auth.model.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    console.log(req.body);
    if (!name || !email || !password || !phone) {
      return res.json({ success: false, message: "Incomplete credentials" });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password should be 6 characters min",
      });
    }

    const newHashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      hashedPassword: newHashedPassword,
      phone,
    });
    const { hashedPassword, ...detailsWithoutPassword } = user.toObject();
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return res.json({
      success: true,
      message: "Registration successful",
      detailsWithoutPassword,
    });
  } catch (error) {
    console.log("Error in register controller", error);
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "Missing credentials" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.hashedPassword
    );
    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Incorrect password" });
    }
    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

    return res.status(201).json({
      success: true,
      message: "Login successful",
      detailsWithoutPassword,
    });
  } catch (error) {
    console.log("Error in login controller", error);
  }
};

// export const isAuthenticated = async (req, res) => {
//   const userId = req.userId;
//   const user = await User.findById(userId);
//   // if (!user) {
//   //   return res.json({ success: false });
//   // }
//   return res.json({ success: true, message: `Welcome back ${user.name}` });
// };

export const logoutUser = async (req, res) => {
  res.clearCookie("token", "");
  return res.json({ success: true, message: "Logout successful" });
};
