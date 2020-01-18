const getAllTodos = function(req, res, next){
    res.status(200).json({
        message: 'From Get All Todos'
    });
}

const getSpecificTodo = function(req, res, next){
    res.status(200).json({
        message: 'From Get Specific Todo' + req.params.id
    });
}

const deleteTodo = function(req, res, next){
    res.status(200).json({
        message: 'From Delete Todo' + req.params.id
    });
}

const addTodo = function(req, res, next) {
    res.status(200).json({
        message: 'From Add Todo'
    })
}

const updateTodo = function(req, res, next){
    res.status(200).json({
        message: 'From Update Todo' + req.params.id
    });
}


module.exports = {
    getAllTodos : getAllTodos,
    getSpecificTodo : getSpecificTodo,
    deleteTodo : deleteTodo,
    addTodo : addTodo,
    updateTodo : updateTodo
}