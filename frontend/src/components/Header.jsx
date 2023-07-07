import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { LoginContext } from '../App'
import { useContext, useState } from 'react'


function Header(){

    const contextValue = useContext(LoginContext)
    const signedIn = contextValue.signedIn
    

    return(
        
        <Navbar classexpand="lg" className='py-3' style={{backgroundColor: `#D2D0BA`}} >
            <Container>
                <Navbar.Brand className='fs-3' style={{color:`#5E747F`}} href="/">DailyDish</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-between" style={{width:`100%`}}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href='/services'>Services</Nav.Link>
                    
                    <div style={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <Button className='login-button' href='/login' style={{backgroundColor:`#B6BE9C`, color:`#5E747F `, border:`none`}}>
                            {signedIn ? ('Account') : ('Log In')}
                        </Button>
                    </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}

export default Header