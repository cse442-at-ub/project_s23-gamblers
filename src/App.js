import ItemInfo from "./components/ItemInfo";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Forgot from './components/Forgot'
import Verify from './components/Verify'
import { useState } from 'react'
import UserAgreement from './components/UserAgreement'

function App() {
  const [login, setLogin] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index path="/iteminfo" element={<ItemInfo />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Forgot' element={<Forgot />} />
          <Route path='/UserAgreement' element={<UserAgreement />} />
          <Route path='/Verify' element={<Verify />} />
        </Routes>
      </BrowserRouter>
      <div>
        {login && <Login setLogin={setLogin} />}
      </div>




    </div>
  )
}

export default App;
