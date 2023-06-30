import { Button, Container, Row, Col } from "react-bootstrap"
import axios from 'axios'
import { useEffect } from "react"

function Home(){

    const URL = `http://localhost:3001/api`

    useEffect(()=>{
        const getMeals = async()=>{
            const mealAPI = await axios.get(`${URL}/meals`)
            console.log(mealAPI.data)
            return mealAPI.data
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
                            <h2>Affordable</h2>
                        </Col>
                        <Col>
                            <h2>Healthy</h2>
                        </Col>
                        <Col>
                            <h2>Different</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Home