const { User } = require('../models')
const bcrypt = require('bcryptjs')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).send('No user found!')
        res.status(200).json(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const createUser = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!user) return res.status(404).send('No user found!')
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) return res.status(404).send('No user found!')
        res.status(200).send(`User deleted successfully!`)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
