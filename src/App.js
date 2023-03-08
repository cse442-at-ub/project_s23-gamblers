import ItemInfo from "./component/ItemInfo";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/iteminfo">iteminfo</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index path="/iteminfo" element={<ItemInfo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
