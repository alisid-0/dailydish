const { Plan } = require('../models')

const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find()
        res.status(200).json(plans)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id)
        if (!plan) return res.status(404).send('No plan found!')
        res.status(200).json(plan)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const createPlan = async (req, res) => {
    const plan = new Plan(req.body)
    try {
        await plan.save()
        res.status(201).send(plan)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const updatePlan = async (req, res) => {
    try {
        const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!plan) return res.status(404).send('No plan found!')
        res.status(200).send(plan)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deletePlan = async (req, res) => {
    try {
        const plan = await Plan.findByIdAndDelete(req.params.id)
        if (!plan) return res.status(404).send('No plan found!')
        res.status(200).send(`Plan deleted successfully!`)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllPlans,
    getPlanById,
    createPlan,
    updatePlan,
    deletePlan
}
