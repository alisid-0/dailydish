import {Container, Form, Button, Card} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState, useContext } from 'react'
import jwt_decode from 'jwt-decode'
import { LoginContext } from '../App'
import { Link } from 'react-router-dom'





const Login=()=>{
    const contextValue = useContext(LoginContext)
    const user = contextValue.user
    const setUser = contextValue.setUser
    const signedIn = contextValue.signedIn
    const setSignedIn = contextValue.setSignedIn

    const [showLoginButton, setShowLoginButton] = useState(true)
    
    function handleCallbackResponse(response){
        let userObject = jwt_decode(response.credential)
        setUser(userObject)
        setSignedIn(true)
        setShowLoginButton(false)
    }

    function handleSignOut(event){
        setUser({})
        setSignedIn(false)
        setShowLoginButton(true)
    }

    useEffect(()=>{
        /* global google */
        if (showLoginButton) {
            google.accounts.id.initialize({
                client_id: '1028178874548-6ikeson9cu5gkkbka6g4fprpd1ciuo56.apps.googleusercontent.com',
                callback: handleCallbackResponse
            })

            google.accounts.id.renderButton(
                document.getElementById("log-in-div"),
                {theme: 'outline', size: 'large'}
            )
        }
    }, [showLoginButton])

    return(
        <>
            <Container className='text-light login-page'>
                <h1 className="pt-5 pb-5">Login Page</h1>
                <Container className='login-container'>
                    <Form>
                        <Form.Group className="mb-3" controlId='formBasicEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter Email'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter Password'/>
                            <Form.Text className='text-light'>We'll never share your password with anyone else.</Form.Text>
                        </Form.Group>
                    </Form>
                    <Button>Sign In</Button>
                    <p className="pt-5"><i>Don't have an account? <a href='/SignUp'as={Link} to='/SignUp'>Sign up.</a></i></p>
                    {showLoginButton && <div id="log-in-div"></div>}
                </Container>
            </Container>
        </>
    )
}

 


  


export default Login