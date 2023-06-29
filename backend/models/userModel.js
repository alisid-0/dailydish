const { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, default: 'user' },
        address: { type: String, default: '' },
        strip_id: { type: String, default: '' },
        subscription_id: { type: String, default: '' }
    },
    { timestamps: true }
)

module.exports = userSchema
