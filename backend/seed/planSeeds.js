const db = require('../db')
const { Plan } = require("../models")

const main = async() => {   

    const plan1 = new Plan({
        name: 'General Plan',
        price: 49.99,
        measPerWeek: 5,
        mealType: ''
    })
    await plan1.save()

    const plan2 = new Plan({
        name: 'Halal Plan',
        price: 79.99,
        measPerWeek: 7,
        mealType:''
    })
    await plan2.save()

    const plan3 = new Plan({
        name: 'Vegan Plan',
        price: 99.99,
        measPerWeek: 10,
        mealType: ''
    })
    await plan3.save()

    const plan4 = new Plan({
        name: 'Kosher Plan',
        price: 99.99,
        measPerWeek: 10,
        mealType: ''
    })
    await plan4.save()

    const plan5 = new Plan({
        name: 'Vegatarian Plan',
        price: 99.99,
        measPerWeek: 10,
        mealType: ''
    })
    await plan5.save()

    const plan6 = new Plan({
        name: 'Pescatarian Plan',
        price: 99.99,
        measPerWeek: 10,
        mealType: ''
    })
    await plan6.save()

    const plan7 = new Plan({
        name: 'Gluten-Free Plan',
        price: 99.99,
        measPerWeek: 10,
        mealType: ''
    })
    await plan7.save()
}

const run = async() => {
    await main()
    db.close()
}
run()