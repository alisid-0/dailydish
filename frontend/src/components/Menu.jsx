import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const URL = import.meta.env.VITE_API_URL;

function Menu({selectedDietPlan}) {

  const [dietPlan, setDietPlan] = useState(selectedDietPlan);
  
  const [meals, setMeals] = useState([]);
  const [selectedDietaryChoices, setSelectedDietaryChoices] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const getMeals = async () => {
    const mealAPI = await axios.get(`${URL}/meals`);
    setMeals(mealAPI.data);
  };

  useEffect(()=>{
    getMeals()
  }, [])

  useEffect(()=>{
    let dietPlanArray = dietPlan.name.split(' ')
    let array = []
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

  return (
    <>
      <div>
        <Container className="meal-card-container" >
          <Row style={{display: `flex`, justifyContent: `center`}}>
            {selectedMeals.map((meal) => (
              <Card
                key={meal._id}
                style={{
                  maxWidth: "400px",
                  maxHeight: "800px",
                  overflowY: "auto",
                }}
                className="py-3 m-2 meal-card dash-item"
              >
                <Card.Img
                  variant="top"
                  src={meal.imageUrl}
                  style={{
                    border: "5px solid #E5C1BD",
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
                        <span className="highlight2"> Dietary Category:</span>{" "}
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
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Menu;
