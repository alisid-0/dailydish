import { Button, Container, Accordion, Col, Row } from "react-bootstrap"
import axios from 'axios'
import { useEffect, useState } from "react"
import step1 from '../assets/number-icons/1.svg'
import step2 from '../assets/number-icons/2.svg'
import step3 from '../assets/number-icons/3.svg'
import step4 from '../assets/number-icons/4.svg'
import step5 from '../assets/number-icons/5.svg'



function Services() {

    const URL = `http://localhost:3001/api`
    const [meals, setMeals] = useState([])
    const [selectedDietaryChoices, setSelectedDietaryChoices] = useState([]);
    const [selectedMeals, setSelectedMeals] = useState([])

    useEffect(() => {
        const getMeals = async() => {
            const mealAPI = await axios.get(`${URL}/meals`)
            console.log(mealAPI.data)
            setMeals(mealAPI.data)
        }
        getMeals()
    }, [])
////////////////////////////////////
// for styling number icons
    const steps = typeof document !== "undefined" && document.querySelectorAll('.number')
    const highlightStep = (id) => {
        for ( i = 0; i < steps.length; i++) {
        if (i === id) {
            steps[i].classList.add('clicked')
        }  
        }
    }

//////////////////////////

    const handleDietaryChoiceChange = (event) => {
      
      if (selectedDietaryChoices.includes(event.target.value)) {
        setSelectedDietaryChoices(selectedDietaryChoices.filter((choice)=> choice !== event.target.value))
      } else {
        setSelectedDietaryChoices(
          [...selectedDietaryChoices, event.target.value]
        )
      }
      console.log(selectedDietaryChoices)
    }

    useEffect(() => {
      if (!meals) return 
      let filteredMeals = [...meals]
      if (selectedDietaryChoices.length > 0) {
        filteredMeals = filteredMeals.filter(meal => {
          return selectedDietaryChoices.some(choice => meal.dietaryCategories.includes(choice))
        })
      }
      setSelectedMeals(filteredMeals)
    }, [selectedDietaryChoices, meals])



    return (
      <>
        <div className="home-page">
          <div className="home text-dark">
            <h1 style={{ fontSize: `8vw` }}>DailyDish</h1>
            <p className="mx-2" style={{ fontSize: `2vw` }}>
              Dine Different.
            </p>
            <Button className="mx-2">Get Started</Button>
          </div>
        </div>

        <div className="py-5 my-5 step-container">
          <img src={step1} className="number" alt="1" />
          <img src={step2} className="number" alt="2" />
          <img src={step3} className="number" alt="3" />
          <img src={step4} className="number" alt="4" />
          <img src={step5} className="number" alt="5" />
        </div>

        <Container className="services-main">
          <Accordion defaultActiveKey="0" className="py-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Choose your diet plan</Accordion.Header>
              <Accordion.Body>
                <form>
                <ul className="checklist">
                  <li className="dietary-choice">
                    <span>All</span>
                    <input type="checkbox" onChange={() => setSelectedDietaryChoices([])}/>
                  </li>
                  <li className="dietary-choice">
                    <span>Vegeterian</span>
                    <input type="checkbox" value='Vegeterian' onChange={(event) => handleDietaryChoiceChange(event)} />
                  </li>
                  <li className="dietary-choice">
                    <span>Pescatarian</span>
                    <input type="checkbox" value='Pescatarian' onChange={(event) => handleDietaryChoiceChange(event)}/>
                  </li>
                  <li className="dietary-choice">
                    <span>Vegan</span>
                    <input type="checkbox" value='Vegan' onChange={(event) => handleDietaryChoiceChange(event)}/>
                  </li>
                  <li className="dietary-choice">
                    <span>Halal</span>
                    <input type="checkbox" value='Halal' onChange={(event) => handleDietaryChoiceChange(event)}/>
                  </li>
                  <li className="dietary-choice">
                    <span>Kosher</span>
                    <input type="checkbox" value='Kosher' onChange={(event) => handleDietaryChoiceChange(event)}/>
                  </li>
                  <li className="dietary-choice">
                    <span>Gluten-Free</span>
                    <input type="checkbox" value='Gluten-Free' onChange={(event) => handleDietaryChoiceChange(event)}/>
                  </li>
                </ul>
                </form>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Select you Meals </Accordion.Header>
              <Accordion.Body>
                <Container fluid className="meal-card-container">
                  <Col>
                    {selectedMeals.map((meal) => (
                      <div key={meal._id} sm={6} md={4} lg={3} className="py-5 meal-card">
                          <img
                            src={meal.imageUrl}
                            alt={meal.name}
                            style={{
                              border: "5px solid orange",
                              borderRadius: "5px",
                            }}
                          />
                          <Button>Add</Button>
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
                            Preparation Instructions: <br />{" "}
                            {meal.preparationInstructions}
                          </p>
                          <p>Dietary Category: </p>
                          {meal.dietaryCategories.map((dietaryCategory, index) => (
                            <p key={index}> {dietaryCategory} </p>
                          ))}
                      </div>
                    ))}
                  </Col>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Select your frequency</Accordion.Header>
              <Accordion.Body>
                <form className="frequency-form">
                  <div className="frequency-check">
                    <input type="radio" name="frequency" id="freq1" value="1" />
                    <label htmlFor="freq1">1 meal per week</label>
                  </div>
                  <div className="frequency-check">
                    <input type="radio" name="frequency" id="freq2" value="2" />
                    <label htmlFor="freq2">2 meals per week</label>
                  </div>
                  <div className="frequency-check">
                    <input type="radio" name="frequency" id="freq3" value="3" />
                    <label htmlFor="freq3">3 meals per week</label>
                  </div>
                  <div className="frequency-check">
                    <input type="radio" name="frequency" id="freq4" value="4" />
                    <label htmlFor="freq4">4 meals per week</label>
                  </div>
                  <div className="frequency-check">
                    <input type="radio" name="frequency" id="freq5" value="5" />
                    <label htmlFor="freq5">5 meals per week</label>
                  </div>
                  <div className="frequency-check">
                    <input type="radio" name="frequency" id="freq6" value="6" />
                    <label htmlFor="freq6">6 meals per week</label>
                  </div>
                  <div className="frequency-check">
                    <input type="radio" name="frequency" id="freq7" value="7" />
                    <label htmlFor="freq7">7 meals per week</label>
                  </div>
                </form>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Login</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Payment</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </>
    );

}

export default Services