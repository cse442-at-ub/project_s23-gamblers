import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import EditWindow from "./component/EditWindow";
function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/editpage">editpage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/editpage" element={<EditWindow/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
