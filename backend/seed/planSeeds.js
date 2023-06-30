const db = require('../db')
const { Plan } = require("../models")

const main = async() => {   

    const plan1 = new Plan({
        name: 'General Plan',
        pricePerMeal: 1.25,
        mealsPerWeek: '',
        meals: ['']
    })
    await plan1.save()

    const plan2 = new Plan({
        name: 'Halal Plan',
        pricePerMeal: 2.99,
        mealsPerWeek: '',
        meals: ['']
    })
    await plan2.save()

    const plan3 = new Plan({
        name: 'Vegan Plan',
        pricePerMeal: 1.50,
        mealsPerWeek: '',
        meals: ['']
    })
    await plan3.save()

    const plan4 = new Plan({
        name: 'Kosher Plan',
        pricePerMeal: 2.99,
        mealsPerWeek: '',
        meals: ['']
    })
    await plan4.save()

    const plan5 = new Plan({
        name: 'Vegatarian Plan',
        pricePerMeal: 1.00,
        mealsPerWeek: '',
        meals: ['']
    })
    await plan5.save()

    const plan6 = new Plan({
        name: 'Pescatarian Plan',
        pricePerMeal: 2.00,
        mealsPerWeek: '',
        meals: ['']
    })
    await plan6.save()

    const plan7 = new Plan({
        name: 'Gluten-Free Plan',
        pricePerMeal: 2.00,
        mealsPerWeek: '',
        meals: ['']
    })
    await plan7.save()
}

const run = async() => {
    await main()
    db.close()
}
run()