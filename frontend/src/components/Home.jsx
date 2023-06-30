import { Button, Container, Row, Col } from "react-bootstrap"
import axios from 'axios'
import { useEffect, useState } from "react"
import salmon2 from '../../../backend/seed/mealImages/salmon2.jpeg'
import falafel from '../../../backend/seed/mealImages/falafel.jpeg'
import chickenstirfry from '../../../backend/seed/mealImages/chicken stirfry2.jpeg'

function Home(){

    const URL = `http://localhost:3001/api`
    const [meals, setMeals] = useState([])
    

    useEffect(() => {
        const getMeals = async() => {
            const mealAPI = await axios.get(`${URL}/meals`)
            console.log(mealAPI.data)
            setMeals(mealAPI.data)
        }
        getMeals()
    }, [])
   

    return(
        <>
            <div className='home-page'>
                <div className='home text-dark'>
                    <h1 style={{fontSize:`8vw`}}>DailyDish</h1>
                    <p className='mx-2' style={{fontSize:`2vw`}}>Dine Different.</p>
                    <Button className='mx-2'>Get Started</Button>
                </div>
            </div>
            <div className="py-5" >
                <h1 className='py-5'>Why Us?</h1>
                <Container>
                    <Row>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[2].imageUrl}></img>
                            <h3>Affordable</h3>
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && salmon2}></img>
                            <h3>Healthy</h3>
                            
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && falafel}></img>
                            <h3>Different</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Home