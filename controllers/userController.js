const signup = function(req, res, next) {
  res.status(200).json({
    message: "From Signup"
  });
};

const login = function(req, res, next) {
  res.status(200).json({
    message: "From Login"
  });
};

const updateUser = function(req, res, next) {
  res.status(200).json({
    message: "From Update User" + req.params.id
  });
};

const deleteUser = function(req, res, next) {
  res.status(200).json({
    message: "From Delete User" + req.params.id
  });
};

module.exports = {
  signup: signup,
  login: login,
  updateUser: updateUser,
  deleteUser: deleteUser
};
