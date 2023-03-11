import ItemInfo from "./components/ItemInfo";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index path="/iteminfo" element={<ItemInfo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
