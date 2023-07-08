import { Container, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

function Success(){
    return(
        <Container className='py-5'>
            <h1 style={{fontSize:`8vw`}}>Payment Success!</h1>
            <Button className='my-5' size='lg' href='/'>Continue Exploring</Button>
        </Container>
    )
}

export default Success