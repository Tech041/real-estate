import jwt from "jsonwebtoken";
export const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized,please login!",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.json({ success: false, message: "Not a valid token" });
    }
    req.userId = payload.userId;
    next();
  });
};
