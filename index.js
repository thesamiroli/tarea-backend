const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');
const parser = require('./utils/parser');
const app = express();

app.use(morgan('dev'));
parser(app);
app.use('users', userRoutes);
app.use('/api/todos', todoRoutes);

app.listen(8000);

module.exports = app;
