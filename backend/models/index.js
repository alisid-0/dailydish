const mongoose = require('mongoose')
const userSchema = require('./userModel')
const mealSchema = require('./mealModel')
const planSchema = require('./planModel')

const User = mongoose.model('User', userSchema)
const Meal = mongoose.model('Meal', mealSchema)
const Plan = mongoose.model('Plan', planSchema)

module.exports = {
    User,
    Meal,
    Plan
}
