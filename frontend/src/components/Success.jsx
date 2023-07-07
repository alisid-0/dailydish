import { Container, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

function Success(){
    return(
        <Container>
            <h1>Payment Success!</h1>
            <Button href='/'>Home</Button>
        </Container>
    )
}

export default Success