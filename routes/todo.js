const router = require('express').Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getSpecificTodo);
router.delete('/:id', todoController.deleteTodo);
router.post('/', todoController.addTodo);
router.patch('/:id', todoController.updateTodo);

module.exports = router;