import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import { generateOTP, sendOTPEmail } from "../../../services/otpService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    await dbConnect();

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 mins

    await user.save();
    await sendOTPEmail(email, otp);

    res.status(200).json({ message: "OTP sent to your email" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
