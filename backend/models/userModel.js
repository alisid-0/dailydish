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
    selected_plan: { 
      planName: { type: String, default: ''},
      mealsPerWeek: {type: Number, default: 0},
      size: {type: Number, default: 0}
     },
    google: {
      isGoogle: {type: Boolean, default: false},
      hasChangedPassword: {type: Boolean, default: false}
    }
  },
  { timestamps: true }
)

module.exports = userSchema
