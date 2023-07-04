const Router = require('express').Router()
const controller = require('../controllers/userController')

Router
    .get('/', controller.getAllUsers)
    .get('/:id', controller.getUserById)
    .post('/', controller.createUser)
    .post('/login', controller.loginUser)
    .put('/:id', controller.updateUser)
    .delete('/:id', controller.deleteUser)

module.exports = Router
