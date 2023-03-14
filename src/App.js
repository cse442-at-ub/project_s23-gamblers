import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Forgot from './Components/Forgot'
import Verify from './Components/Verify'
import { useState } from 'react'
import UserAgreement from './Components/UserAgreement'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div>
      <div>
        {login && <Login setLogin={setLogin}/>}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/UserAgreement' element={<UserAgreement />} />
          <Route path='/Verify' element={<Verify />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
