
import {Navbar, Nav, Container, Button} from 'react-bootstrap'


function Header(){

    return(
        
        <Navbar expand="lg" className='py-3'>
            <Container>
                <Navbar.Brand href="/">DailyDish</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-between" style={{width:`100%`}}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href='/services'>Services</Nav.Link>
                    <Nav.Link href='/services'></Nav.Link>
                    
                    <div style={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <Button href='/login'>Login</Button>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default Header