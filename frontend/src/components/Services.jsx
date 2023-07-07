import { Button, Container, ToggleButton, ToggleButtonGroup} from "react-bootstrap"
import axios from 'axios'
import Menu from "./Menu"
import { useEffect, useState, useContext } from "react"
import step1Image from '../assets/number-icons/1.svg'
import step2Image from '../assets/number-icons/2.svg'
import step3Image from '../assets/number-icons/3.svg'
import { LoginContext } from "../App"
import { Link } from "react-router-dom"
import Checkout from "./Checkout"

const URL = import.meta.env.VITE_API_URL

function Services() {



    const contextValue = useContext(LoginContext) 
    const setTotalCheckout = contextValue.setTotalCheckout
    const selectedPlan = contextValue.selectedPlan
    const setSelectedPlan = contextValue.setSelectedPlan
    const [plans, setPlans] = useState([])
    const [selectedDietPlan, setSelectedDietPlan] = useState(null)
    const [selectedFrequency, setSelectedFrequency] = useState(2)
    const [selectedPeople, setSelectedPeople] = useState(2)
    const [activeStep, setActiveStep] = useState(0)
    const [page, setPage] = useState(1)
    const [pricePerMeal, setPricePerMeal] = useState(null)
    let frequency = parseInt(selectedFrequency)
    let numPeople = parseInt(selectedPeople)



    const getPlans = async() => {
      const planAPI = await axios.get(`${URL}/plans`)
      
      setPlans(planAPI.data)
    }

    useEffect(() => {
      getPlans()
    },[])

    
////////////////////////////////////
// for styling number icons

//////////////////////////////////////////////////

    const handleNextStep = () => {
      setPage(page + 1)
    }

    useEffect(()=>{
      const steps = document.querySelectorAll('.number')
      steps.forEach((step, index) => {
        if (index === (page - 1)){
          step.classList.add('clicked')
        } else {
          step.classList.remove('clicked')
        }
      })
    },[page])

    const createPlanObject = () => {
      setSelectedPlan({
        planName: selectedDietPlan.name,
        mealsPerWeek: selectedFrequency,
        size: selectedPeople
      })
    }

  


    const handleBackStep = () => {
      setPage(page - 1)
    }


//////////////////////////////////////////////////
/// filtering meal prices


    const handleDietPlanChange = (event) => {
      const selectedDietPlanId = event.target.value
      const selectedDietPlan = plans.find((plan) => plan.name === selectedDietPlanId)
      setSelectedDietPlan(selectedDietPlan)
      console.log(selectedDietPlan)
      return(selectedDietPlan.pricePerMeal)

    }
    
    useEffect(()=>{
      if (selectedDietPlan){
        setPricePerMeal(selectedDietPlan.pricePerMeal)
      }
    },[selectedDietPlan])

      const taxPercent = 1.10
      const totalMeals = frequency * numPeople
      const totalPrice = (totalMeals * pricePerMeal).toFixed(2)
      const totalPriceWithTax = (totalPrice * taxPercent).toFixed(2)

      useEffect(()=>{
        setTotalCheckout(totalPriceWithTax)
      }, [totalPriceWithTax])


    const renderPricePerMeal = () => {
      if (selectedDietPlan) {
        return selectedDietPlan.pricePerMeal
      }
      return null
    }



//////////////////////////////////////////////////

    const handleFrequencyChange = (event) => {
      const value = event.target.getAttribute('data-value')
      setSelectedFrequency(value)
    }

    const handleNumberOfPeople = (event) => {
      const value = event.target.getAttribute('data-value')
      setSelectedPeople(value)
    }

//////////////////////////////////////////////////


    return (
      <>
       <h1 className='pt-5 mt-5' style={{fontSize:`8vw`}}>Customize your plan!</h1>
        <div className="py-5 my-5 step-container">
          <img
            src={step1Image}
            className={`number ${activeStep === 0 ? "clicked" : ""}`}
            alt="1"
          />
          <img
            src={step2Image}
            className={`number ${activeStep === 1 ? "clicked" : ""}`}
            alt="2"
          />
            <img
              src={step3Image}
              className={`number ${activeStep === 2 ? "clicked" : ""}`}
              alt="3"
            />
        </div>

        <Container className="services-main rounded py-5 mb-5">
          {page == 1 && (
            <Container>
              <ul className="diet-checklist">
                <li className="dietary-choice">
                  <span>General Plan</span>
                  <input
                    type="radio"
                    id="diet-plan-1"
                    name="diet-plan"
                    value="General Plan"
                    onChange={handleDietPlanChange}
                  />
                </li>
                <li className="dietary-choice">
                  <span>Vegetarian Plan</span>
                  <input
                    type="radio"
                    id="diet-plan-2"
                    name="diet-plan"
                    value="Vegetarian Plan"
                    onChange={handleDietPlanChange}
                  />
                </li>
                <li className="dietary-choice">
                  <span>Pescatarian Plan</span>
                  <input
                    type="radio"
                    id="diet-plan-3"
                    name="diet-plan"
                    value="Pescatarian Plan"
                    onChange={handleDietPlanChange}
                  />
                </li>
                <li className="dietary-choice">
                  <span>Vegan Plan</span>
                  <input
                    type="radio"
                    id="diet-plan-4"
                    name="diet-plan"
                    value="Vegan Plan"
                    onChange={handleDietPlanChange}
                  />
                </li>
                <li className="dietary-choice">
                  <span>Halal Plan</span>
                  <input
                    type="radio"
                    id="diet-plan-5"
                    name="diet-plan"
                    value="Halal Plan"
                    onChange={handleDietPlanChange}
                  />
                </li>
                <li className="dietary-choice">
                  <span>Kosher Plan</span>
                  <input
                    type="radio"
                    id="diet-plan-6"
                    name="diet-plan"
                    value="Kosher Plan"
                    onChange={handleDietPlanChange}
                  />
                </li>
                <li className="dietary-choice">
                  <span>Gluten-Free Plan</span>
                  <input
                    type="radio"
                    id="diet-plan-7"
                    name="diet-plan"
                    value="Gluten-Free Plan"
                    onChange={handleDietPlanChange}
                  />
                </li>
              </ul>
              <Button onClick={handleNextStep} disabled={!selectedDietPlan}>Next</Button>
            </Container>
          )}
              

              {page == 2 && (
                <Container>
                  <div className="frequency-container">
                    <h5>Number of people</h5>

                    <ToggleButtonGroup type="radio" name='people' defaultValue={[1]} className="mb-2">
                      <ToggleButton id="tbg-check-1" value={1} data-value={'2'} onClick={handleNumberOfPeople}>
                        2
                      </ToggleButton>
                      <ToggleButton id="tbg-check-2" value={2} data-value={'4'} onClick={handleNumberOfPeople}>
                        4
                      </ToggleButton>
                    </ToggleButtonGroup>

                    <h5>Meals per week</h5>
                    <ToggleButtonGroup type="radio" name='frequency' defaultValue={[3]} className="mb-2">
                      <ToggleButton id="check-1" value={3} className={`frequency-button ${selectedFrequency === "2" ? "active" : ""}`}
                      onClick={handleFrequencyChange}
                      data-value={"2"}>
                        2
                      </ToggleButton>
                      <ToggleButton id="check-2" value={4} className={`frequency-button ${selectedFrequency === "3" ? "active" : ""}`}
                      onClick={handleFrequencyChange}
                      data-value={"3"}>
                        3
                      </ToggleButton>
                      <ToggleButton id="check-3" value={5} className={`frequency-button ${selectedFrequency === "4" ? "active" : ""}`}
                      onClick={handleFrequencyChange}
                      data-value={"4"}>
                        4
                      </ToggleButton>
                      <ToggleButton id="check-4" value={6} className={`frequency-button ${selectedFrequency === "5" ? "active" : ""}`}
                      onClick={handleFrequencyChange}
                      data-value={"5"}>
                        5
                      </ToggleButton>
                      <ToggleButton id="check-5" value={7} className={`frequency-button ${selectedFrequency === "6" ? "active" : ""}`}
                      onClick={handleFrequencyChange}
                      data-value={"6"}>
                        6
                      </ToggleButton>
                    </ToggleButtonGroup>

                  </div>
                  <div className="order-summary">
                    <h3>Order Summary</h3>
                    <p>Number of People: {selectedPeople}</p>
                    <p>Frequency: {selectedFrequency} meals per week</p>
                    <p>Total Meals: {totalMeals}</p>
                    <p>Price per Meal: ${renderPricePerMeal()}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total After Taxes: ${totalPriceWithTax}</p>
                  </div>
                  <Button onClick={handleBackStep} className="my-3 mx-2">
                    Back
                  </Button>
                  <Button onClick={handleNextStep} className="my-3 mx-2">
                    Next
                  </Button>
                </Container>
              )}
                {page ===3 && (
                  <Container>
                    <Menu selectedDietPlan={selectedDietPlan} page={page} setPage={setPage}/>
                    <Button onClick={handleBackStep} className="my-3 mx-2">
                      Back
                    </Button>
                    <Button onClick={createPlanObject}variant="info" as={Link} to='/checkout' className="my-3 mx-2">
                      Checkout
                    </Button>
                  </Container>
                  
                )}

                {page ===4 && (
                  <Checkout/>
                )}
        </Container> 
        
      </>
    )

}


export default Services