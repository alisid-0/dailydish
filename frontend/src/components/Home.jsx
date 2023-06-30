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
            <div className="py-5 home-background" >

                <div className='py-5 int' >
                    <h1 className='py-5 text-light'>Welcome to <span className="blue">DailyDish.</span></h1>
                    <h4 className='py-3 text-light'>Your ultimate destination for delicious and convenient meal solutions!</h4>
                    <h4 className='py-3 px-5 text-light'>At DailyDish, we understand the challenges of planning and preparing meals amidst busy schedules and demanding lifestyles. That's why we've created a service that takes the hassle out of cooking while delivering incredible flavors and wholesome ingredients right to your doorstep.</h4>
                    <h4 className='py-3 px-5 text-light'>With DailyDish, you'll have access to a diverse and ever-growing menu of chef-curated meals designed to tantalize your taste buds. Our team of culinary experts carefully crafts each recipe to ensure a perfect balance of flavors, textures, and nutritional value. No matter what your budget, dietary needs or family size. Our flexible meal kits come complete with everything you need to quickly cook your meal. Whether you're a busy professional, a health-conscious individual, or a family looking to enjoy quality time over a delicious meal, we have you covered. Choose from a variety of dietary options, including vegetarian, vegan, gluten-free, kosher, and more. We believe that everyone deserves a meal that suits their unique preferences and requirements. Not only do we prioritize convenience and flavor, but we also value your health and well-being. Our commitment to using high-quality, locally sourced ingredients ensures that every bite you take is a step towards a healthier lifestyle. You can trust DailyDish to provide you with nourishing meals that support your overall well-being.</h4>
                    <h4 className='py-3 px-5 text-light'>Join us today and experience the joy of effortless cooking and extraordinary flavors. Get ready to explore a world of culinary delights, elevate your dining experience, and create lasting memories around the dinner table. We're here to make your life easier, tastier, and more enjoyable.</h4>

                </div>

                <h1 className='py-5 text-light'>Why Us?</h1>
                <Container>
                    <Row>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[2].imageUrl}></img>
                            <h3 className='text-light'>Affordable</h3>
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[5].imageUrl}></img>
                            <h3 className='text-light'>Healthy</h3>
                            
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[4].imageUrl}></img>
                            <h3 className='text-light'>Different</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Home