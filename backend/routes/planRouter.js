const Router = require('express').Router()
const controller = require('../controllers/planController')

Router
    .get('/', controller.getAllPlans)
    .get('/:id', controller.getPlanById)
    .post('/', controller.createPlan)
    .put('/:id', controller.updatePlan)
    .delete('/:id', controller.deletePlan)

module.exports = Router
