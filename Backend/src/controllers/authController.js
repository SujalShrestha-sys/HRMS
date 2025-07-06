import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "8d" }
    );

    console.log(token);

    res
      .status(200)
      .json({
        success: true,
        token,
        user: { _id: user._id, name: user.name, role: user.role },
      });
  } catch (error) {
    /* console.log(error); */
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
};

export const verify = (req, res) => {
  return res.status(200).json({
    success: true, user: req.user,
    message : "user verified successfully"
  })
}

export default login;
