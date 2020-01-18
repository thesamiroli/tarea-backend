const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "randomKey123");
    req.userData = decoded;
    console.log("Token Verified");
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Authorization Failed"
    });
  }
  next();
};
