import { User } from "../models/User.js";
import ErrorHandler from "../Utils/errorHandler.js";
import bcrypt from "bcrypt"
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto"
import { sendEmail } from "../Utils/sendEmail.js";


export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return next(new ErrorHandler("Please enter all field", 400));

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler("User Already Exist", 409));

  const hashPassword = await bcrypt.hash(password, 10)

  user = await User.create({
    name,
    email,
    password: hashPassword
  });

  sendToken(res, user, "Registered Successfully", 201);
}

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please enter all field", 400));

  const user = await User.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return next(new ErrorHandler("Incorrect Email or Password", 401));

  sendToken(res, user, `Welcome back, ${user.name}`, 200);
}

export const logout = async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
}


export const getMyProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id);
// res.json(user)
  res.status(200).json({
    success: true,
    user,
  });
};


export const forgetPassword = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler("User not found", 400));

  const resetToken = await user.getResetToken();

  await user.save();

  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  const message = `Click on the link to reset your password. ${url}. If you have not request then please ignore.`;

  // Send token via email
  await sendEmail(user.email, "CourseBundler Reset Password", message);

  res.status(200).json({
    success: true,
    message: `Reset Token has been sent to ${user.email}`,
  });
};



export const resetPassword = async (req, res, next) => {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });

  // bcrypt.hash(password, 10)


  if (!user)
    return next(new ErrorHandler("Token is invalid or has been expired", 401));


  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;


  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
};