const { Schema, Types } = require('mongoose')

const planSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        mealsPerWeek: { type: Number, required: true },
        mealType: { type: Types.ObjectId, ref: 'Meal' } 
    },
    { timestamps: true }
)

module.exports = planSchema
