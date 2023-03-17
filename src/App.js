import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Setting from './components/Setting'
import Home from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
