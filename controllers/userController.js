const userService = require("../services/userService");

const signup = async function(req, res, next) {
  const response = await userService.signup(
    req.body.email,
    req.body.username,
    req.body.password
  );
  if (response != null) {
    res.status(200).json(response);
  } else {
    res.status(500).json({
      message: "Something is not right"
    });
  }
};

const login = async function(req, res, next) {
  const response = await userService.login(req.body.email, req.body.password);
  res.json({ response });
};

module.exports = {
  signup: signup,
  login: login
};
