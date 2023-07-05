import {Container, Form, Button, Tab, Tabs, Nav, Row, Col, Alert, Stack, InputGroup} from 'react-bootstrap'
import React, { useEffect, useState, useContext } from 'react'

import '../App.css'
import { LoginContext } from '../App'
import { Link } from 'react-router-dom'
import axios from 'axios'
import bcrypt from 'bcryptjs'

const URL = import.meta.env.VITE_API_URL

function AccountPage(){

    const contextValue = useContext(LoginContext)
    const user = contextValue.user
    const setUser = contextValue.setUser
    const signedIn = contextValue.signedIn
    const setSignedIn = contextValue.setSignedIn
    const showLoginButton = contextValue.showLoginButton
    const setShowLoginButton = contextValue.setShowLoginButton

    const [usersList, setUsersList] = useState(null)

    
    useEffect(()=>{
      const getUsersList = async()=>{
        const users = await axios.get(`${URL}/users`)
        await setUsersList(users.data)
      }
      getUsersList()
    },[])

    function handleSignOut(event){
        localStorage.setItem('user', JSON.stringify({}))
        setUser({})
        setSignedIn(false)
        setShowLoginButton(true)
    }

    return(
        <div style={{display:`flex`, flexDirection:`row`,color: '#000', backgroundColor: '#f5f5f5', borderRadius:`0.3vw`}} className='px-3'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='p-4'>
            <Row style={{width:`200vw`}}>
                <Col sm={3} className='p-0'>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Profile</Nav.Link>
                    </Nav.Item>
                    {user.role === 'admin' && (
                    <Nav.Item>
                        <Nav.Link eventKey="second">Admin Panel</Nav.Link>
                    </Nav.Item>
                    )}
                    <Nav.Item>
                    <Nav.Link eventKey="third">Account Settings</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9} className='p-0'>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Container className='py-4 panel'>
                        <div className=''>
                        <h1>Profile</h1>
                        </div>
                        <div className='panel-profile'>
                        <p>Email: {user.email}</p>
                        <p>Name: {user.username}</p>
                        {user.role === 'admin' && (
                            <p className='py-4'>You have admin privileges.</p>
                        )}
                        <Button variant="danger" onClick= {(e)=> handleSignOut(e)}>Sign Out</Button> 
                        </div>
                    </Container>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                        <Container className='py-4 panel'>
                            <h1>Admin Panel</h1>
                            <Tabs defaultActiveKey="Dashboard" className="mb-3">
                            <Tab eventKey="Dashboard" title="Dashboard">
                                <Dashboard/>
                            </Tab>
                            <Tab eventKey="Users" title="Users">
                                <Users usersList={usersList}/>
                            </Tab>
                            <Tab eventKey="Plans" title="Plans">
                                Tab content for Plans
                            </Tab>
                            <Tab eventKey="Meals" title="Meals">
                                Tab content for Meals
                            </Tab>
                            </Tabs>
                        </Container>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <div className='py-4 panel'>
                        <Account user={user}/>
                    </div>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    )
}

function Dashboard(){

    const orders = [
      {
        name: `John Doe`,
        email: 'johndoe@email.com',
        price: 58.90,
        date: new Date(),
        id: 122,
        status: `Delivered`
      },
      {
        name: `Jane Doe`,
        email: 'janedoe@email.com',
        price: 97.34,
        date: new Date(),
        id: 132,
        status: `Canceled`
      },
      {
        name: `Jack Doe`,
        email: 'jackdoe@email.com',
        price: 142.4,
        date: new Date(),
        id: 133,
        status: `Pending`
      },
  
    ]
  
    return(
      <Container>
        <Row>
          <Col>
            <div className='dash-item'>
              <p className='text-muted my-0 py-1'>Total Sales</p>
              <p>$19,232,435</p>
            </div>
          </Col>
          <Col>
            <div className='dash-item'>
              <p className='text-muted  my-0 py-1'>Total Orders</p>
              <p>3242</p>
            </div>
            </Col>
          <Col>
            <div className='dash-item'>
              <p className='text-muted  my-0 py-1'>Total Products</p>
              <p>9</p>
            </div>
          </Col>
        </Row>
        <Row className='py-4'>
          <Col>
            <div className='dash-item'>
              <h5>Latest Orders</h5>
                {orders.map((order,index)=>(
                  <Container fluid='sm' key={index} style={{borderBottom: `0.001vh solid rgba(0, 0, 0, 0.318)`}}>
                    <Row className='py-0 pt-3 my-0'>
                      <Col xs={1}>
                        <p>{order.id}</p>
                      </Col>
                      <Col>
                        <p>{order.name}</p>
                      </Col>
                      <Col>
                        <p className='text-muted'>{order.email}</p>
                      </Col>
                      <Col xs={2}>
                        <p>${order.price}</p>                  
                      </Col>
                      <Col>
                        <p>{order.date.toDateString()}</p>                  
                      </Col>
                      <Col>
                        <p className={order.status}>{order.status}</p>
                      </Col>
                    </Row>
                  </Container>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
  
  function Users({usersList}){
    
    console.log(usersList)
  
    return(
      <Container>
        <Row>
          <Col>
          <div className='dash-item'>
  
          </div>
          </Col>
        </Row>
        
      </Container>
    )
  }
  
  
  
  function Account( user ) {
    user = user.user
    const [isUserEditable, setIsUserEditable] = useState(false)
    const [isAddressEditable, setIsAddressEditable] = useState(false)
    const [userInfo, setUserInfo] = useState({
      username: user.username,
      email: user.email,
      password: user.password,
    })
    const [addressInfo, setAddressInfo] = useState(user.address || [])
  
    const handleUserChange = (e) => {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
  
    const handleAddressChange = (e) => {
      setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value })
    }
    
  
    const handleUserSave = async () => {
      try {
        const response = await axios.put(`${URL}/users/${user._id}`, userInfo)
        console.log(response.data)
        setIsUserEditable(false)
        localStorage.setItem('user', JSON.stringify(response.data))
      } catch (error) {
        console.error(error)
      }
    }
  
    const handleAddressSave = async () => {
      try {
        const response = await axios.put(`${URL}/users/${user._id}`, {
          address: addressInfo,
        })
        console.log(response.data)
        setIsAddressEditable(false)
        localStorage.setItem('user', JSON.stringify(response.data))
      } catch (error) {
        console.error(error)
      }
    }
  
    const handleUserCancel = () => {
      setIsUserEditable(false)
      setUserInfo(user)
    }
  
    const handleAddressCancel = () => {
      setIsAddressEditable(false)
      setAddressInfo(user.address)
    }
  
    
    
  
    return (
      <Container>
        <h1>Account Settings</h1>
        <Row>
          <Col>
            <div className="dash-item">
              <h5 className="pb-3">User Information</h5>
              <Form>
                <UserInfoForm 
                  userInfo={userInfo} 
                  isEditable={isUserEditable} 
                  onChange={handleUserChange}
                />
                {!isUserEditable && (
                  <Button onClick={() => setIsUserEditable(true)}>Update</Button>
                )}
                {isUserEditable && (
                  <Stack gap={3}>
                    <Button style={{ maxWidth: `5vw` }} onClick={handleUserSave}>
                      Save
                    </Button>
                    <Button
                      style={{ maxWidth: `5vw` }}
                      variant="outline-secondary"
                      onClick={handleUserCancel}
                    >
                      Cancel
                    </Button>
                  </Stack>
                )}
              </Form>
            </div>
          </Col>
  
          <Col>
            <div className="dash-item">
              <h5 className="pb-3">Address Information</h5>
              <Form>
                <AddressInfoForm
                  addressInfo={addressInfo}
                  isEditable={isAddressEditable}
                  onChange={handleAddressChange}
                />
                {!isAddressEditable && (
                  <Button onClick={() => setIsAddressEditable(true)}>
                    Update
                  </Button>
                )}
                {isAddressEditable && (
                  <Stack gap={3}>
                    <Button style={{ maxWidth: `5vw` }} onClick={handleAddressSave}>
                      Save
                    </Button>
                    <Button
                      style={{ maxWidth: `5vw` }}
                      variant="outline-secondary"
                      onClick={handleAddressCancel}
                    >
                      Cancel
                    </Button>
                  </Stack>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
  
  const UserInfoForm = ({ userInfo, isEditable, onChange }) => (
    <>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="10" className='px-5'>
          <Form.Control 
            readOnly={!isEditable}
            name="username"
            value={userInfo.username} 
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10" className='px-5'>
          <Form.Control 
            readOnly={!isEditable}
            name="email"
            value={userInfo.email} 
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10" className='px-5'>
          <Form.Control 
            type="password"
            placeholder="Password"
            readOnly={!isEditable}
            name="password"
            value={userInfo.password} 
            onChange={onChange}
          />
        </Col>
      </Form.Group>
    </>
  )
  
  
  const AddressInfoForm = ({ addressInfo, isEditable, onChange }) => (
    <>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextFirst">
        <Form.Label column sm="2">
          First Name
        </Form.Label>
        <Col sm="10" className="px-5">
          <Form.Control
            readOnly={!isEditable}
            name="firstName"
            value={addressInfo.firstName || ''}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLast">
        <Form.Label column sm="2">
          Last Name
        </Form.Label>
        <Col sm="10" className="px-5">
          <Form.Control
            readOnly={!isEditable}
            name="lastName"
            value={addressInfo.lastName || ''}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextState">
        <Form.Label column sm="2">
          State
        </Form.Label>
        <Col sm="10" className="px-5">
          <Form.Control
            readOnly={!isEditable}
            name="state"
            value={addressInfo.state || ''}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextCity">
        <Form.Label column sm="2">
          City
        </Form.Label>
        <Col sm="10" className="px-5">
          <Form.Control
            readOnly={!isEditable}
            name="city"
            value={addressInfo.city || ''}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextZipCode">
        <Form.Label column sm="2">
          Zip Code
        </Form.Label>
        <Col sm="10" className="px-5">
          <Form.Control
            readOnly={!isEditable}
            name="zipCode"
            value={addressInfo.zipCode || ''}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextStreet">
        <Form.Label column sm="2">
          Street
        </Form.Label>
        <Col sm="10" className="px-5">
          <Form.Control
            readOnly={!isEditable}
            name="street"
            value={addressInfo.street || ''}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
  
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextApartmentNo">
        <Form.Label column sm="2">
          Apartment No.
        </Form.Label>
        <Col sm="10" className="px-5">
          <Form.Control
            readOnly={!isEditable}
            name="apartmentNo"
            value={addressInfo.apartmentNo || ''}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
    </>
  )
  


export default AccountPage