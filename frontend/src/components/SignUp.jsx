import {Container, Form, Button} from 'react-bootstrap'
import React, { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../App'
import { Link } from 'react-router-dom'
import axios from 'axios'


function SignUp(){
    const signUpHandler = async()=>{
        const email = document.getElementById('formBasicEmail').value
        const password = document.getElementById('formBasicPassword').value
        const name = document.getElementById('formBasicName').value
        const usersApi = await axios.get('http://localhost:3001/api/users')
        const users = usersApi.data
        const emailInUse = users.some(user => user.email === email)

        if(emailInUse){
            alert('Email is already in use')
        } else {
            const newUser = {
                name,
                email,
                password,
            }

            await axios.post('http://localhost:3001/api/users', newUser)
            alert('User created successfully')
        }
    }

    return(
        <Container className='text-dark' style={{maxWidth:`50%`}}>
            <h1 className='py-5'>Sign Up</h1>
            <Form>
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
                    <Form.Text className='text-dark'>We'll never share your password with anyone else.</Form.Text>
                </Form.Group>
            </Form>
            <Button onClick={signUpHandler}>Sign Up</Button>
        </Container>
    )
}

export default SignUp