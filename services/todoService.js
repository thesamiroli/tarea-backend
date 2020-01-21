const mongoose = require("mongoose");
const Todo = require("../models/todo");

const getAllTodos = async function(userId) {
  const response = await Todo.find({ authorId: userId }).exec();
  return response;
};

const getSpecificTodo = async function(userId, todoId) {
  const response = await Todo.find({
    authorId: userId,
    _id: todoId
  });
  console.log("TS14", response);
  return response;
};

const addTodo = async function(userId, todoBody) {
  const todo = new Todo({
    _id: new mongoose.Types.ObjectId(),
    title: todoBody.title,
    content: todoBody.content,
    authorId: userId,
    createdAt: new Date().toString(),
    checked: false
  });

  const response = await todo.save();

  return response;
};

const deleteTodo = async function(userId, todoId) {
  await Todo.deleteOne({
    _id: todoId,
    authorId: userId
  });
};

const updateTodo = function(userId, todoId, updatedTodo) {
  const response = Todo.update();
};

module.exports = {
  getAllTodos: getAllTodos,
  getSpecificTodo: getSpecificTodo,
  addTodo: addTodo,
  deleteTodo: deleteTodo,
  updateTodo: updateTodo
};
