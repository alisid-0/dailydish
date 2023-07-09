import { Button, Container, Row, Col } from "react-bootstrap"
import axios from 'axios'
import { useEffect, useState } from "react"
import healthy from '../assets/healthy.jpeg'

function Home(){

    const URL = `http://localhost:3001/api`
    const [meals, setMeals] = useState([])
    

    useEffect(() => {
        const getMeals = async() => {
            const mealAPI = await axios.get(`${URL}/meals`)
            setMeals(mealAPI.data)
        }
        getMeals()
    }, [])
   

    return(
        <>
            <div className='py-5 home-page home-background'>
                <div className='py-1 home'>
                    <h1 style={{fontSize:`8vw`}}>DailyDish</h1>
                    <p className='mx-2' style={{fontSize:`2vw`}}>Dine Different.</p>
                    <Button className='mx-2' style={{backgroundColor:`#5E747F`, color:`#E5C1BD`}} href='/services'>Get Started</Button>
                </div>
            </div>
            <div className="mx-auto py-5" >
                <h1 className='py-5'>Why Us?</h1>
                <Container className="text-dark">
                    <Row>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[2].imageUrl}></img>
                            <p className="fs-2">Discounted</p>
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[5].imageUrl}></img>
                            <p className="fs-2">Delicious</p>
                            
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[4].imageUrl}></img>
                            <p className="fs-2" >Different</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className=' py-5 home-page'>
                <Container>
                    <Row lg={2} md={1}>
                        <Col>
                            <img style={{width:`80%`, border: `3px solid #E5C1BD`}} src={healthy}></img>
                        </Col>
                        <Col>
                            <div className='px-4 text-dark' style={{display: `flex`, flexDirection: `column`, alignItems: `flex-start`}}>
                                <p className="fs-1 text-dark">What's inside?</p>
                                <p className='px-1'> Easy-to-follow recipes with clear nutritional info </p>
                                <p className='px-1'> High-quality ingredients sourced straight from the farm</p>
                                <p className='px-1'>Convenient meal kits that fit perfectly in the fridge</p>
                                <p className='px-1'>A fun cooking experience that makes you feel unstoppable</p>
                                <p className='px-1'>Love and care</p>
                                <Button className="py-2 my-4" href='/services'>Start customizing your plan now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Home