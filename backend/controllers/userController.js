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
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    console.log(req.body.password, hashedPassword)
    const user = new User({...req.body, password: hashedPassword})
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const updateUser = async (req, res) => {
    let updatedData = req.body
    if(updatedData.password){
        const hashedPassword = bcrypt.hashSync(updatedData.password, 10)
        updatedData = {...updatedData, password: hashedPassword}
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true })
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

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (password !== '' || user.password !== '') {
        console.log('password not empty. comparing..');
        const isMatch = bcrypt.compareSync(password, user.password);
  
        if (!isMatch) {
          return res.status(400).json({ error: 'Incorrect password' });
        }
      }
  
      const userObject = {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        address: user.address,
        strip_id: user.strip_id,
        selected_plan: user.selected_plan,
        google: user.google,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      };
  
      res.json(userObject);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  

  


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}
