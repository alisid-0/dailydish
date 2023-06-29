const Router = require('express').Router()
const controller = require('../controllers/mealController')

Router
    .get('/', controller.getAllMeals)
    .get('/:id', controller.getMealById)
    .post('/', controller.createMeal)
    .put('/:id', controller.updateMeal)
    .delete('/:id', controller.deleteMeal)

module.exports = Router
