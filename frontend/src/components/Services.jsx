import { Button, Container, Accordion, Col, Row, Card, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import axios from 'axios'
import { useEffect, useState } from "react"
import step1 from '../assets/number-icons/1.svg'
import step2 from '../assets/number-icons/2.svg'
import step3 from '../assets/number-icons/3.svg'
import step4 from '../assets/number-icons/4.svg'
import step5 from '../assets/number-icons/5.svg'

const URL = import.meta.env.VITE_API_URL

function Services() {

    
    const [meals, setMeals] = useState([])
    const [selectedDietaryChoices, setSelectedDietaryChoices] = useState([]);
    const [selectedMeals, setSelectedMeals] = useState([])
    const [selectedFrequency, setSelectedFrequency] = useState('')
    const [activeAccordion, setActiveAccordion] = useState(null)

    const getMeals = async() => {
      const mealAPI = await axios.get(`${URL}/meals`)
      console.log(mealAPI.data)
      setMeals(mealAPI.data)
    }

    useEffect(() => {
        getMeals()
    }, [])

    
////////////////////////////////////
// for styling number icons
    
    const highlightStep = (id) => {
      const steps = document.querySelectorAll('.number')
        steps.forEach((step, index) => {
          if (index === id) {
            step.classList.add('clicked')
          } else {
            step.classList.remove('clicked')
          }
        }) 
    }    
    
    const handleAccordionChange = (accordionKey) => {
      setActiveAccordion(accordionKey)
      highlightStep(parseInt(accordionKey))
    }


//////////////////////////////////////////////////

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

//////////////////////////////////////////////////

    const handleFrequencyChange = (event) => {
      const frequency = event.target.value
      setSelectedFrequency(frequency)
      console.log(selectedFrequency)
    }
    
    useEffect(() => {
      console.log(selectedFrequency);
    }, [selectedFrequency]);

    return (
      <>
        <div className="py-5 my-5 step-container">
          <img src={step1} className="number" alt="1" />
          <img src={step2} className="number" alt="2" />
          <img src={step3} className="number" alt="3" />
          <img src={step4} className="number" alt="4" />
          <img src={step5} className="number" alt="5" />
        </div>

        <Container className="services-main">
          <Accordion
            defaultActiveKey="0"
            className="py-5"
            activeKey={activeAccordion}
            onSelect={handleAccordionChange}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Choose your diet plan</Accordion.Header>
              <Accordion.Body>
                <form>
                  <ul className="checklist">
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
                  </ul>
                </form>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Select you Meals </Accordion.Header>
              <Accordion.Body>
                <Container fluid className="meal-card-container">
                  <Col>
                  {/* {selectedMeals.map((meal) => (
                    <Card style={{ width: "30vw" }}>
                      <Card.Img
                        variant="top"
                        src={meal.imageUrl}
                        style={{
                          border: "5px solid orange",
                          borderRadius: "5px",
                        }}
                      ></Card.Img>
                      <Card.Body>
                        <Card.Title> {meal.name} </Card.Title>
                        <Card.Text>Description: {meal.description}
                        <details>
                          <summary>Show Ingredients</summary>
                          <ul className="ingredients-list">
                            {meal.ingredients.map((ingredient, index) => (
                              <li key={index}> {ingredient} </li>
                            ))}
                          </ul>
                        </details></Card.Text>
                      </Card.Body>
                    </Card>
                  ))} */}

                    {selectedMeals.map((meal) => (
                      <div
                        key={meal._id}
                        sm={6}
                        md={4}
                        lg={3}
                        className="py-5 meal-card"
                      >
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
                          Preparation Instructions: <br />{" "}
                          {meal.preparationInstructions}
                        </p>
                        <p>Dietary Category: </p>
                        {meal.dietaryCategories.map(
                          (dietaryCategory, index) => (
                            <p key={index}> {dietaryCategory} </p>
                          )
                        )}
                        <Button className="add-meal">Add</Button>
                      </div>
                    ))}
                  </Col>
                </Container>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Select your frequency</Accordion.Header>
              <Accordion.Body>
                <Container fluid className="frequency-container">
                  <h5>How many meals would you like each week?</h5>

                  <ToggleButtonGroup
                    type="radio"
                    name="frequency"
                    value={selectedFrequency}
                    onChange={handleFrequencyChange}
                  >
                    <ToggleButton value="1">1 </ToggleButton>
                    <ToggleButton value="2">2 </ToggleButton>
                    <ToggleButton value="3">3 </ToggleButton>
                    <ToggleButton value="4">4 </ToggleButton>
                    <ToggleButton value="5">5 </ToggleButton>
                    <ToggleButton value="6">6 </ToggleButton>
                    <ToggleButton value="7">7 </ToggleButton>
                    <ToggleButton value="8">8 </ToggleButton>
                    <ToggleButton value="9">9 </ToggleButton>
                    <ToggleButton value="10">10 </ToggleButton>
                    <ToggleButton value="11">11 </ToggleButton>
                    <ToggleButton value="12">12 </ToggleButton>
                    <ToggleButton value="13">13 </ToggleButton>
                    <ToggleButton value="14">14 </ToggleButton>
                    <ToggleButton value="15">15 </ToggleButton>
                    <ToggleButton value="16">16 </ToggleButton>
                    <ToggleButton value="17">17 </ToggleButton>
                    <ToggleButton value="18">18 </ToggleButton>
                    <ToggleButton value="19">19 </ToggleButton>
                    <ToggleButton value="20">20 </ToggleButton>
                    <ToggleButton value="21">21 </ToggleButton>
                    <ToggleButton value="22">22 </ToggleButton>
                    <ToggleButton value="23">23 </ToggleButton>
                    <ToggleButton value="24">24 </ToggleButton>
                    <ToggleButton value="25">25 </ToggleButton>
                    <ToggleButton value="26">26 </ToggleButton>
                    <ToggleButton value="27">27 </ToggleButton>
                    <ToggleButton value="28">28 </ToggleButton>
                  </ToggleButtonGroup>
                </Container>
                {/* <form className="frequency-form">
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
                </form> */}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Login</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Payment</Accordion.Header>
              <Accordion.Body>
                <form>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text" id="expiryDate" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Name on Card</label>
                    <input type="text" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="billingAddress">Billing Address</label>
                    <input type="text" id="billingAddress" />
                  </div>

                  <button type="submit">Submit Payment</button>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </>
    );

}

export default Services