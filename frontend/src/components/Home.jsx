import { Button, Container, Row, Col } from "react-bootstrap"

function Home(){

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
                <h1>Why Us?</h1>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Home