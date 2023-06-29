import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import { createContext, useState } from 'react'

export const UserContext = createContext(null)

function App() {

  const [user,setUser] = useState(null)

  return (
    <UserContext.Provider value={{user,setUser}}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
