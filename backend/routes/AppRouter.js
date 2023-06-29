const Router = require('express').Router()

const UserRouter = require('./userRouter')
const MealRouter = require('./mealRouter')
const PlanRouter = require('./planRouter')

Router.use('/users', UserRouter)
Router.use('/meals', MealRouter)
Router.use('/plans', PlanRouter)

module.exports = Router
