const mongoose = require("mongoose");
const authorization = require("../middlewares/authorization");
const User = require("../models/user");

const signup = async function(inputEmail, inputUsername, inputPassword) {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: inputEmail,
    username: inputUsername,
    password: inputPassword
  });

  const addUser = await user
    .save()
    .then(result => result)
    .catch(err => err);

  return addUser;
};

const login = function(inputEmail, inputPassword) {
  const response = User.find({ email: inputEmail })
    .exec()
    .then(user => {
      if (inputPassword == user[0].password) {
        const token = authorization.generateToken(user);
        const success = {
          status: 200,
          message: "Authorization Successful",
          token: token
        };
        return success;
      } else {
        return {
          status: 400,
          message: "Wrong Password"
        };
      }
    })
    .catch(err => {
      return {
        status: 400,
        message: "Username not found"
      };
    });

  return response;
};

module.exports = {
  login: login,
  signup: signup
};
