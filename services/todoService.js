const mongoose = require("mongoose");
const Todo = require("../models/todo");

const getAllTodos = async function(userId) {
  const response = await Todo.find({ authorId: userId }).exec();
  return response;
};

const getSpecificTodo = function(userId, todoId) {};

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

const deleteTodo = function(userId, todoId) {};

const updateTodo = function(userId, todoId, updatedTodo) {};

module.exports = {
  getAllTodos: getAllTodos,
  getSpecificTodo: getSpecificTodo,
  addTodo: addTodo,
  deleteTodo: deleteTodo,
  updateTodo: updateTodo
};
