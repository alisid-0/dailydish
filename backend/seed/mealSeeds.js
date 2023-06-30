const db = require('../db')
const { Plan, Meal } = require('../models')

const main = async () => {

    const meal1 = new Meal({
        name: "Grilled Salmon",
        description: "Delicious grilled salmon served with lemon and herbs.",
        ingredients: ["Salmon fillet", "Lemon", "Olive oil", "Fresh herbs", "Salt", "Pepper"],
        preparationInstructions: "1. Preheat the grill. 2. Brush the salmon with olive oil and season with salt and pepper. 3. Grill the salmon for about 4-5 minutes on each side or until cooked through. 4. Squeeze fresh lemon juice over the salmon and garnish with chopped herbs. 5. Serve hot.",
        dietaryCategories: ["Pescatarian"],
        imageUrl: 'mealImages/salmon2.jpeg'
    })
    await meal1.save()

    const meal2 = new Meal({
        name: "Caprese Salad",
        description: "Classic Italian Caprese salad with fresh tomatoes, mozzarella, and basil.",
        ingredients: ["Tomatoes", "Fresh mozzarella", "Basil leaves", "Extra virgin olive oil", "Balsamic vinegar", "Salt", "Pepper"],
        preparationInstructions: "1. Slice the tomatoes and mozzarella into thick rounds. 2. Arrange them on a plate, alternating between tomato and mozzarella slices. 3. Tuck basil leaves in between the slices. 4. Drizzle with olive oil and balsamic vinegar. 5. Season with salt and pepper. 6. Let it marinate for a few minutes before serving.",
        dietaryCategories: ["Vegetarian"],
        imageUrl: 'mealImages/caprese.jpeg'
    })
    await meal2.save()

    const meal3 = new Meal({
        name: "Chicken Stir-Fry",
        description: "Healthy and flavorful chicken stir-fry with assorted vegetables.",
        ingredients: ["Chicken breast", "Broccoli", "Carrots", "Bell peppers", "Onion", "Garlic", "Ginger", "Soy sauce", "Sesame oil", "Cornstarch", "Salt", "Pepper"],
        preparationInstructions: "1. Cut the chicken into bite-sized pieces and marinate with soy sauce, ginger, garlic, salt, and pepper. 2. Heat oil in a pan or wok and stir-fry the chicken until cooked. 3. Remove the chicken from the pan. 4. In the same pan, stir-fry the vegetables until crisp-tender. 5. Mix cornstarch with water to make a slurry. 6. Add the slurry, soy sauce, and sesame oil to the pan. 7. Return the chicken to the pan and toss to coat everything in the sauce. 8. Serve hot with steamed rice or noodles.",
        dietaryCategories: ["Gluten-Free"],
        imageUrl: 'mealImages/chicken stirfry2.jpeg'
    })
    await meal3.save()

    const meal4 = new Meal({
        name: "Lamb Biryani",
        description: "Aromatic basmati rice cooked with tender lamb, spices, and fragrant herbs.",
        ingredients: ["Lamb", "Basmati rice", "Onion", "Tomatoes", "Ginger", "Garlic", "Yogurt", "Biryani spices (cumin, coriander, cardamom, cinnamon, cloves, bay leaves)", "Saffron", "Mint leaves", "Cilantro", "Ghee", "Salt"],
        preparationInstructions: "1. Marinate the lamb with yogurt, ginger, garlic, and biryani spices. 2. Soak basmati rice in water for 30 minutes and drain. 3. In a large pot, heat ghee and sauté sliced onions until golden. 4. Add marinated lamb and cook until browned. 5. Add chopped tomatoes, mint leaves, and cilantro. 6. Add soaked rice, saffron, and water. 7. Season with salt and bring to a boil. 8. Reduce heat, cover, and let it cook on low heat until the rice and lamb are tender. 9. Serve hot with raita or yogurt sauce.",
        dietaryCategories: ["Halal"],
        imageUrl:'mealImages/lamb.jpeg'
    })
    await meal4.save()

    const meal5 = new Meal({
        name: "Falafel Wrap",
        description: "Authentic Middle Eastern falafel wrapped in a warm pita with fresh veggies and tahini sauce.",
        ingredients: ["Chickpeas", "Onion", "Garlic", "Cilantro", "Parsley", "Cumin", "Coriander", "Flour", "Baking soda", "Salt", "Pepper", "Pita bread", "Lettuce", "Tomatoes", "Cucumber", "Tahini sauce"],
        preparationInstructions: "1. Soak chickpeas overnight. 2. Drain chickpeas and blend them with onion, garlic, cilantro, parsley, cumin, coriander, flour, baking soda, salt, and pepper to form a thick batter. 3. Shape the batter into small patties and fry until golden brown. 4. Warm pita bread in the oven or on a stovetop. 5. Spread tahini sauce on the pita, then add lettuce, tomatoes, cucumbers, and falafel patties. 6. Roll it up and serve as a delicious wrap.",
        dietaryCategories: ["Halal", "Vegetarian"],
        imageUrl: 'mealImages/falafel.jpeg'
    })
    await meal5.save()

    const meal6 = new Meal({
        name: "Matzo Ball Soup",
        description: "Traditional Jewish soup with flavorful chicken broth and tender matzo balls.",
        ingredients:["Chicken broth", "Chicken", "Matzo meal", "Eggs", "Onion", "Carrots", "Celery", "Fresh dill", "Salt", "Pepper"],
        preparationInstructions: "1. In a large pot, bring chicken broth to a simmer. 2. Add chicken, onion, carrots, celery, salt, and pepper. 3. Cook until the chicken is tender and cooked through. 4. In a separate bowl, mix matzo meal, eggs, salt, pepper, and chopped dill to form a dough. 5. Let the dough rest for 15-20 minutes. 6. Shape the dough into small balls. 7. Drop the matzo balls into the simmering broth. 8. Cover and cook for about 20 minutes until the matzo balls are cooked and fluffy. 9. Remove the chicken, shred the meat, and return it to the soup. 10. Serve hot, garnished with fresh dill.",
        dietaryCategories:  ["Kosher"],
        imageUrl: 'mealImages/matzo.jpeg'
    })
    await meal6.save()

    const meal7 = new Meal({
        name: "Vegan Buddha Bowl",
        description: "A colorful and nutritious bowl filled with a variety of plant-based ingredients.",
        ingredients:["Quinoa", "Roasted vegetables (sweet potatoes, Brussels sprouts, bell peppers)", "Avocado", "Chickpeas", "Spinach", "Tahini dressing", "Lemon juice", "Olive oil", "Salt", "Pepper"],
        preparationInstructions: "1. Cook quinoa according to package instructions and let it cool. 2. Roast the vegetables in the oven with olive oil, salt, and pepper until tender. 3. In a bowl, layer cooked quinoa, roasted vegetables, avocado slices, chickpeas, and spinach. 4. Drizzle with tahini dressing and a squeeze of fresh lemon juice. 5. Toss gently to combine and enjoy.",
        dietaryCategories:  ["Vegan"],
        imageUrl: 'mealImages/buddah.jpeg'
    })
    await meal7.save()

    const meal8 = new Meal({
        name: "Mediterranean Shrimp Pasta",
        description:"A delightful combination of juicy shrimp, Mediterranean flavors, and pasta.",
        ingredients:["Shrimp", "Pasta (such as linguine or spaghetti)", "Cherry tomatoes", "Kalamata olives", "Baby spinach", "Feta cheese", "Fresh basil leaves", "Garlic", "Lemon juice", "Olive oil", "Salt", "Pepper", "Red pepper flakes (optional)"],
        preparationInstructions: "1. Cook the pasta according to package instructions until al dente. Drain and set aside. 2. In a large pan, heat olive oil over medium heat. Add minced garlic and sauté until fragrant. 3. Add the shrimp to the pan and cook until pink and opaque. 4. Add halved cherry tomatoes, Kalamata olives, and a pinch of red pepper flakes (if desired). Stir and cook for a few minutes until the tomatoes soften. 5. Toss in baby spinach leaves and cook until wilted. 6. Add the cooked pasta to the pan and gently toss everything together. 7. Squeeze fresh lemon juice over the pasta and season with salt and pepper to taste. 8. Remove from heat and crumble feta cheese on top. 9. Garnish with fresh basil leaves. 10. Serve warm and enjoy!",
        dietaryCategories:  ["Pescatarian"],
        imageUrl: 'mealImages/shrimp pasta.jpeg'
    })
    await meal8.save()

    const meal9 = new Meal({
        name: "Vegan Sweet Potato and Black Bean Chili",
        description:"Hearty and flavorful chili made with sweet potatoes, black beans, and aromatic spices.",
        ingredients:["Sweet potatoes", "Black beans", "Onion", "Garlic", "Red bell pepper", "Diced tomatoes", "Vegetable broth", "Chili powder", "Cumin", "Smoked paprika", "Cayenne pepper", "Salt", "Pepper", "Olive oil", "Fresh cilantro (for garnish)"],
        preparationInstructions: "1. Heat olive oil in a large pot over medium heat. 2. Add diced onion, minced garlic, and sliced red bell pepper. Sauté until the vegetables are softened. 3. Add peeled and diced sweet potatoes to the pot, along with chili powder, cumin, smoked paprika, cayenne pepper, salt, and pepper. Stir to coat the sweet potatoes with the spices. 4. Pour in diced tomatoes and vegetable broth. Bring the mixture to a boil, then reduce the heat and simmer until the sweet potatoes are tender. 5. Add black beans (rinsed and drained) to the pot and cook for an additional 10 minutes to allow the flavors to meld. 6. Adjust the seasoning if needed. 7. Serve the chili hot, garnished with fresh cilantro. Enjoy!",
        dietaryCategories: ["Vegan", "Kosher"],
        imageUrl: 'mealImages/sweetpotatoblkbean2.jpeg'
    })
    await meal9.save()
}

const run = async() => {
    await main()
    db.close()
}
run()