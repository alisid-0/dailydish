const db = require('../db')
const { Plan } = require("../models")

const main = async() => {   

    const plan1 = new Plan({
        name: 'Basic Plan',
        price: 49.99,
        measPerWeek: 5,
        mealType: ''
    })
    await plan1.save()

    const plan2 = new Plan({
        name: 'Premium Plan',
        price: 79.99,
        measPerWeek: 7,
        mealType:''
    })
    await plan2.save()

    const plan3 = new Plan({
        name: 'Deluxe Plan',
        price: 99.99,
        measPerWeek: 10,
        mealType: ''
    })
    await plan3.save()
}

const run = async() => {
    await main()
    db.close()
}
run()