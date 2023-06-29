const { Meal } = require('../models')

const getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.find()
        res.status(200).json(meals)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getMealById = async (req, res) => {
    try {
        const meal = await Meal.findById(req.params.id)
        if (!meal) return res.status(404).send('No meal found!')
        res.status(200).json(meal)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const createMeal = async (req, res) => {
    const meal = new Meal(req.body)
    try {
        await meal.save()
        res.status(201).send(meal)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const updateMeal = async (req, res) => {
    try {
        const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!meal) return res.status(404).send('No meal found!')
        res.status(200).send(meal)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteMeal = async (req, res) => {
    try {
        const meal = await Meal.findByIdAndDelete(req.params.id)
        if (!meal) return res.status(404).send('No meal found!')
        res.status(200).send(`Meal deleted successfully!`)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllMeals,
    getMealById,
    createMeal,
    updateMeal,
    deleteMeal
}
