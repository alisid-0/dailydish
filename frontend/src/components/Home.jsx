import { Button, Container, Row, Col } from "react-bootstrap"
import axios from 'axios'
import { useEffect, useState } from "react"

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
            {/* <div className='py-1 home-page'>
                <div className='py-1 home'>
                    <h1 style={{fontSize:`8vw`}}>DailyDish</h1>
                    <p className='mx-2' style={{fontSize:`2vw`}}>Dine Different.</p>
                    <Button className='mx-2' style={{backgroundColor:`#5E747F`, color:`#E5C1BD`}}>Get Started</Button>
                </div>
            </div> */}
            <div className="mx-auto home-background" >
            <Container className='me-0' style={{width:`75%`}} >
                <div className='py-5 intro' style={{textAlign:`left`}}>
                    <h2 className='py-5' style={{textAlign:`center`}} >Welcome to <span className="highlight">DailyDish.</span></h2>
                    <h4 className='py-3t'>Your ultimate destination for delicious and convenient meal solutions!</h4>
                    <h4 className='py-3 px-5'>At DailyDish, we understand the challenges of planning and preparing meals amidst busy schedules and demanding lifestyles. That's why we've created a service that takes the hassle out of cooking while delivering incredible flavors and wholesome ingredients right to your doorstep.</h4>
                    <h4 className='py-3 px-5t'>With DailyDish, you'll have access to a diverse and ever-growing menu of chef-curated meals designed to tantalize your taste buds. Our team of culinary experts carefully crafts each recipe to ensure a perfect balance of flavors, textures, and nutritional value. No matter what your budget, dietary needs or family size. Our flexible meal kits come complete with everything you need to quickly cook your meal. Whether you're a busy professional, a health-conscious individual, or a family looking to enjoy quality time over a delicious meal, we have you covered. Choose from a variety of dietary options, including vegetarian, vegan, gluten-free, kosher, and more. We believe that everyone deserves a meal that suits their unique preferences and requirements. Not only do we prioritize convenience and flavor, but we also value your health and well-being. Our commitment to using high-quality, locally sourced ingredients ensures that every bite you take is a step towards a healthier lifestyle. You can trust DailyDish to provide you with nourishing meals that support your overall well-being.</h4>
                    <h4 className='py-3 px-5'>Join us today and experience the joy of effortless cooking and extraordinary flavors. Get ready to explore a world of culinary delights, elevate your dining experience, and create lasting memories around the dinner table. We're here to make your life easier, tastier, and more enjoyable.</h4>
                    <Button 
                        className="py-3 fs-2"
                        style={{backgroundColor:`#7B9E87`, color:`#E5C1BD`, width:`100%`}}> Get started in these easy steps</Button>
                </div>
                </Container>
                <h2 className='py-5'>Why Us?</h2>
                <Container>
                    <Row>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[2].imageUrl}></img>
                            <h3>Affordable</h3>
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[5].imageUrl}></img>
                            <h3>Healthy</h3>
                            
                        </Col>
                        <Col>
                            <img className='home-img' src={meals.length > 0 && meals[4].imageUrl}></img>
                            <h3>Different</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Home