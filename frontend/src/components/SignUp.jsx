import {Container, Form, Button, Alert, InputGroup, Row, Col} from 'react-bootstrap'
import React, { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../App'
import { Link } from 'react-router-dom'
import axios from 'axios'
import bcrypt from 'bcryptjs'

function SignUp(){

    const [message, setMessage] = useState(null)
    const [variant, setVariant] = useState(null)

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    setValidated(true);
    };

    const signUpHandler = async()=>{
        const email = document.getElementById('formBasicEmail').value
        const passwordVal = document.getElementById('formBasicPassword').value
        const confirmPasswordVal = document.getElementById(`formBasicConfirmPassword`).value
        const username = document.getElementById('formBasicName').value
        const usersApi = await axios.get('http://localhost:3001/api/users')
        const users = usersApi.data
        const emailInUse = users.some(user => user.email === email)
        
        const password = bcrypt.hashSync(passwordVal,10)

        if(emailInUse){
            setVariant('danger')
            setMessage('Email is already in use.')
        } else if (email.length < 3){
            setVariant(`danger`)
            setMessage(`Must be a valid email.`)
        } else if(passwordVal.length < 8){
            setVariant(`danger`)
            setMessage('Password must be 8 characters in length or greater.')
        } else if (passwordVal != confirmPasswordVal){
            setVariant(`danger`)
            setMessage(`Passwords do not match.`)
        } else {
            const newUser = {
                username,
                email,
                password,
            }

            await axios.post('http://localhost:3001/api/users', newUser)
            setVariant('info')
            setMessage(`User created successfully!`)
        }
    }

    return(
        <Container className='text-light bg-dark p-5 mt-5' style={{maxWidth:`40vw`, borderRadius:`3rem`}}>
            <h1 className='py-5'>Sign Up</h1>
            <Form>
                {message && (<Alert variant={variant}>{message}</Alert>)}
                <Form.Group className="mb-3" controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='username' placeholder='Enter Name'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password'/>
                </Form.Group><Form.Group className="mb-3" controlId='formBasicConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password'/>
                    <Form.Text className='text-light'>We'll never share your password with anyone else.</Form.Text>
                </Form.Group>
            </Form>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter Name"/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required/>
                        <Form.Control.Feedback type="invalid">Please choose a password.</Form.Control.Feedback>                    
                </Form.Group>
                
                <Button type="submit">Submit form</Button>
            </Form>
            <Button onClick={signUpHandler}>Sign Up</Button>
            <p className="pt-5"><i>Already have an account? <a href='/login'as={Link} to='/login'>Log In.</a></i></p>
        </Container>
    )
}

export default SignUp