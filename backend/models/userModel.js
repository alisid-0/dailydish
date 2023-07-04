const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    address: {
      firstName: { type: String, default: '' },
      lastName: { type: String, default: '' },
      state: { type: String, default: '' },
      city: { type: String, default: '' },
      zipCode: { type: String, default: '' },
      street: { type: String, default: '' },
      apartmentNo: { type: String, default: '' },
    },
    stripe_id: { type: String, default: '' },
    selected_plan: { type: [String], default: '' },
  },
  { timestamps: true }
)

module.exports = userSchema
