const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const redis = require("../config/cache");


async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "token not provided",
    });
  }

const isBlacklisted = await redis.get(token);

if(isBlacklisted){
    return res.status(401).json({
        message: "Invalid credentials",
      });
}

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
}

module.exports = {
  authUser
};
