const { Schema } = require('mongoose')

const mealSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        ingredients: { type: [String], required: true },  
        preparationInstructions: { type: String, required: true },
        dietaryCategories: { type: [String], default: [] },  
        imageUrl: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = mealSchema
