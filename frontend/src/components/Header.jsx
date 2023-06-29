
import {Navbar, Nav, Container} from 'react-bootstrap'


function Header(){

    return(
        
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">DailyDish</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href='/services'>Services</Nav.Link>
                    <Nav.Link href='/login'>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default Header