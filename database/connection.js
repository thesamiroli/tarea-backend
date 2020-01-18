const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:todoadmin@todo-api-kyfbe.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(result => {
    console.log("Mongoose is connected");
    
}).catch(err => {
    console.log("Mongoose connection unsuccessful");
});

module.exports = {
  mongoose : mongoose
};