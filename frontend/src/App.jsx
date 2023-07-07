import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css' 
import Home from './components/Home'
import Services from './components/Services'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout'
import AccountPage from './components/AccountPage'
import { createContext, useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js' 
import { Elements } from '@stripe/react-stripe-js'

// const stripePKey= import.meta.env.VITE_STRIPE_PKEY

const stripePromise = loadStripe(`pk_test_51NQIYWC1OoTug78s1NFpUbRd5qL4IfkoGYaLE6CEp8CHzfK7Qvim5pfesvDuy3UREM4lE7TYnYvMRFwIdD8yHuhL00cJKg9nAA`)

export const LoginContext = createContext(null)

function App() {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/api/payment/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }

  const storageCheck = () =>{
    return localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : `{}`
  }
  
  const [user,setUser] = useState(storageCheck())
  const [signedIn, setSignedIn] = useState(false)
  const [showLoginButton, setShowLoginButton] = useState(true)

  useEffect(()=>{
    if (user === `{}`){
      setSignedIn(false)
    } else if (localStorage.getItem('user') != `{}`){
      setSignedIn(true)
    }
  },[])



  return (
    <LoginContext.Provider value={{ user, setUser, signedIn, setSignedIn, showLoginButton, setShowLoginButton }}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/services' element={<Services />} />
          <Route path='/checkout' element={
            clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <Checkout />
              </Elements>
            )
          } />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App
