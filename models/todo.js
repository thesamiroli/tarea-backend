const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    createdAt: {
        type: String
    },
    checked: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', todoSchema);