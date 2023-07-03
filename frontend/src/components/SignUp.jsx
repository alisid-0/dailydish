import {Container, Form, Button} from 'react-bootstrap'
import React, { useEffect, useState, useContext } from 'react'
import { LoginContext } from '../App'
import { Link } from 'react-router-dom'
import axios from 'axios'
import bcrypt from 'bcryptjs'

function SignUp(){
    const signUpHandler = async()=>{
        const email = document.getElementById('formBasicEmail').value
        const passwordVal = document.getElementById('formBasicPassword').value
        const username = document.getElementById('formBasicName').value
        const usersApi = await axios.get('http://localhost:3001/api/users')
        const users = usersApi.data
        const emailInUse = users.some(user => user.email === email)
        
        const password = bcrypt.hashSync(passwordVal,10)
        


        if(emailInUse){
            alert('Email is already in use')
        } else if (password.length < 8){
            alert(`Password must be 8 characters or greater.`)
        } else {
            const newUser = {
                username,
                email,
                password,
            }

            await axios.post('http://localhost:3001/api/users', newUser)
            alert('User created successfully')
        }
    }

    return(
        <Container className='text-light bg-dark p-5 mt-5' style={{maxWidth:`30vw`, borderRadius:`3rem`}}>
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