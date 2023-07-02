import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { createContext, useState } from 'react'


import'./app.scss';

export const LoginContext = createContext(null)

function App() {

  const [user,setUser] = useState({})
  const [signedIn, setSignedIn] = useState(false)

  return (
    <LoginContext.Provider value={{user,setUser, signedIn, setSignedIn}}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
        </Routes>
      </Router>
    </LoginContext.Provider>
  )
}

export default App
