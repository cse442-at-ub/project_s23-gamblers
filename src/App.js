import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import Forgot from './Components/Forgot'
import { useState } from 'react'

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
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
