import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const URL = import.meta.env.VITE_API_URL;

function Menu({selectedDietPlan}) {

  const [dietPlan, setDietPlan] = useState(selectedDietPlan);
  
  const [meals, setMeals] = useState([]);
  const [selectedDietaryChoices, setSelectedDietaryChoices] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const getMeals = async () => {
    const mealAPI = await axios.get(`${URL}/meals`);
    setMeals(mealAPI.data);
    console.log('meal api data',mealAPI.data)
  };

  useEffect(()=>{
    console.log('diet plan', dietPlan)
    getMeals()
  }, [])

  useEffect(()=>{
    console.log('meals',meals);
    let dietPlanArray = dietPlan.name.split(' ')
    let array = []
    console.log(console.log('diet plan array',dietPlanArray));
    meals.forEach((meal,index)=>{
      meal.dietaryCategories.forEach((category,index)=>{
        if (category == dietPlanArray[0]){
          array.push(meal)
        }
      })
    })
    if (dietPlanArray[0] == `General`){
      array = meals
    }
    setSelectedMeals(array)
  }, [meals])

  useEffect(()=>{
    console.log(selectedMeals)
  }, [selectedMeals])
  


  // const handleDietaryChoiceChange = (event) => {
    // if (selectedDietaryChoices.includes(event.target.value)) {
    //   setSelectedDietaryChoices(
    //     selectedDietaryChoices.filter((choice) => choice !== event.target.value)
    //   );
    // } else {
    //   setSelectedDietaryChoices([
    //     ...selectedDietaryChoices,
    //     event.target.value,
    //   ]);
    // }
    // console.log(selectedDietaryChoices);
  // }


  // useEffect(() => {
  //   if (!meals) return;
  //   let filteredMeals = [...meals];
  //   if (selectedDietaryChoices.length > 0) {
  //     filteredMeals = filteredMeals.filter((meal) => {
  //       return selectedDietaryChoices.some((choice) =>
  //         meal.dietaryCategories.includes(choice)
  //       );
  //     });
  //   }
  //   setSelectedMeals(filteredMeals);
  // }, [selectedDietaryChoices, meals]);



  return (
    <>

      {/* <ul className="checklist">
        <li className="dietary-choice">
          <span>All</span>
          <input
            type="checkbox"
            onChange={() => setSelectedDietaryChoices([])}
          />
        </li>
        <li className="dietary-choice">
          <span>Vegetarian</span>
          <input
            type="checkbox"
            value="Vegetarian"
            onChange={(event) => handleDietaryChoiceChange(event)}
          />
        </li>
        <li className="dietary-choice">
          <span>Pescatarian</span>
          <input
            type="checkbox"
            value="Pescatarian"
            onChange={(event) => handleDietaryChoiceChange(event)}
          />
        </li>
        <li className="dietary-choice">
          <span>Vegan</span>
          <input
            type="checkbox"
            value="Vegan"
            onChange={(event) => handleDietaryChoiceChange(event)}
          />
        </li>
        <li className="dietary-choice">
          <span>Halal</span>
          <input
            type="checkbox"
            value="Halal"
            onChange={(event) => handleDietaryChoiceChange(event)}
          />
        </li>
        <li className="dietary-choice">
          <span>Kosher</span>
          <input
            type="checkbox"
            value="Kosher"
            onChange={(event) => handleDietaryChoiceChange(event)}
          />
        </li>
        <li className="dietary-choice">
          <span>Gluten-Free</span>
          <input
            type="checkbox"
            value="Gluten-Free"
            onChange={(event) => handleDietaryChoiceChange(event)}
          />
        </li>
      </ul> */}

      <div>
        <div fluid="true" className="meal-card-container" style={{ overflowX: "auto" }}>
          {selectedMeals.map((meal) => (
            <Card
              key={meal._id}
              style={{
                width: "400px",
                height: "800px",
                marginRight: "10px",
                overflowY: "auto",
              }}
              className="py-3 meal-card"
            >
              <Card.Img
                variant="top"
                src={meal.imageUrl}
                style={{
                  border: "5px solid orange",
                  borderRadius: "5px",
                }}
              ></Card.Img>
              <Card.Body>
                <Card.Title>
                  <h1>
                    <strong>{meal.name}</strong>
                  </h1>
                </Card.Title>
                <Card.Text>
                  <u>Description</u>: {meal.description}
                  <br />
                  <br />
                  <details>
                    <summary>
                      <strong>Ingredients:</strong>
                    </summary>
                    <br />
                    <ul className="ingredients-list">
                      {meal.ingredients.map((ingredient, index) => (
                        <li key={index}> {ingredient} </li>
                      ))}
                    </ul>
                  </details>
                  <br />
                  <details>
                    <summary>
                      <strong>Preparation Instructions:</strong>
                    </summary>
                    <p>{meal.preparationInstructions}</p>
                  </details>
                  <br />
                  <div
                    className="dietary-container"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <p>
                      <u>Dietary Category</u>:{" "}
                    </p>
                    {meal.dietaryCategories.map((dietaryCategory, index) => (
                      <p key={index}> {dietaryCategory} </p>
                    ))}
                  </div>
                  <Button className="add-meal">Add</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* {selectedMeals.map((meal) => (
          <div key={meal._id} sm={6} md={4} lg={3} className="py-5 meal-card">
            <img
              src={meal.imageUrl}
              alt={meal.name}
              style={{
                border: "5px solid orange",
                borderRadius: "5px",
              }}
            />
            <h2 className="py-3">{meal.name}</h2>
            <p>Description: {meal.description}</p>
            <details>
              <summary>Show Ingredients</summary>
              <ul className="ingredients-list">
                {meal.ingredients.map((ingredient, index) => (
                  <li key={index}> {ingredient} </li>
                ))}
              </ul>
            </details>
            <br />
            <p>
              Preparation Instructions: <br /> {meal.preparationInstructions}
            </p>
            <p>Dietary Category: </p>
            {meal.dietaryCategories.map((dietaryCategory, index) => (
              <p key={index}> {dietaryCategory} </p>
            ))}
            <Button className="add-meal">Add</Button>
          </div>
        ))} */}

      </div>

    </>
  );
}

export default Menu;
