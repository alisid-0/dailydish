const Router = require('express').Router()

const UserRouter = require('./userRouter')
const MealRouter = require('./mealRouter')
const PlanRouter = require('./planRouter')
const PaymentRouter = require('./paymentRouter')

Router.use('/users', UserRouter)
Router.use('/meals', MealRouter)
Router.use('/plans', PlanRouter)
Router.use('/payment', PaymentRouter)

module.exports = Router
