const { Schema, Types } = require('mongoose')

const planSchema = new Schema(
    {
        name: { type: String, required: true },
        pricePerMeal: { type: Number, required: true },
        mealsPerWeek: { type: Number },
        meals: { type: [Types.ObjectId], ref: 'Meal' } 
    },
    { timestamps: true }
)

module.exports = planSchema
