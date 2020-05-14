const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "randomKey123");
    req.userData = decoded;
    next();
  } catch (error) {
    next({ status: 401, message: "Token Verification Failed" });
  }
};

const generateToken = user => {
  const token = jwt.sign(
    {
      email: user[0].email,
      userId: user[0]._id
    },
    "randomKey123",
    {
      expiresIn: "1h"
    }
  );
  return token;
};

module.exports = {
  verifyToken: verifyToken,
  generateToken: generateToken
};
