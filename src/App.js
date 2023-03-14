import ItemInfo from "./components/ItemInfo";
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
        <Route index path="/iteminfo" element={<ItemInfo itid={1}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
